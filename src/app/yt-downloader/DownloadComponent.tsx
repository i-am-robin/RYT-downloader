"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineRemoveRedEye, MdAudiotrack } from "react-icons/md";
import { LuClapperboard } from "react-icons/lu";
import DownloadOption from "./DownloadOption";

type TVideoObject = {
  info: {
    hasAudio: boolean;
    hasVideo: boolean;
    qualityLabel: string;
    url: string;
    container: string;
    itag: number;
  }[];
  length: string;
  themnails: {
    url: string;
  }[];
  title: string;
  description: string | null;
  url: string;
  views: string;
};

type TNavOptions = {
  id: number;
  text: "Video" | "Audio";
  icon: any;
};

function DownloadComponent({ videoData }: { videoData: TVideoObject }) {
  const [activeNav, setActiveNav] = useState<string>("Video");

  const themnailURL = videoData.themnails[videoData.themnails?.length - 1]?.url;

  const downLoadOptions: TNavOptions[] = [
    {
      id: 1,
      text: "Video",
      icon: <LuClapperboard className={"mx-auto"} />,
    },
    {
      id: 2,
      text: "Audio",
      icon: <MdAudiotrack className={"mx-auto"} />,
    },
  ];

  return (
    <div className="bg-gray-800 shadow-xl scrollbar_none rounded border-opacity-60 border border-gray-500 p-3 mt-5">
      <div className="grid gap-2 w-full max-w-[35rem] grid-cols-8 border-opacity-60 border-b border-gray-500 pb-4">
        <div className="col-span-3 border border-gray-500 border-opacity-25 rounded-md max-h-24 overflow-hidden">
          <Image
            src={themnailURL}
            height={500}
            width={500}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <div className="w-full col-span-5 text-left">
          <p className="truncate" title={videoData.title}>
            {videoData.title}
          </p>
          <p className="flex items-center gap-1 opacity-70 text-xs">
            <MdOutlineRemoveRedEye className="fill-gray-200 h-5 w-5" />
            Views: {videoData.views}
          </p>
          <p
            className="line-clamp-3 leading-normal text-xs border-t border-gray-800 py-1 opacity-50"
            title={videoData.description as string}
          >
            <strong>Description </strong>- {videoData.description}
          </p>
        </div>
      </div>
      <div className="">
        <div className="mt-3 flex justify-between rounded-md border-opacity-60 border border-gray-500 h-fit bg-gray_200 bg-opacity-50 flex-row">
          {downLoadOptions.map((menu) => (
            <button
              title={menu.text}
              key={menu.id}
              onClick={() => setActiveNav(menu.text)}
              className={`w-full bg-opacity-25 transition-all duration-100 py-2 items-center shadow-none hover:bg-gray-500 ${
                activeNav === menu.text && "bg-gray-600"
              }`}
            >
              {menu.icon}
            </button>
          ))}
        </div>
        <DownloadOption
          activeNav={activeNav}
          videoInfo={videoData.info}
          videoUrl={videoData.url}
        />
      </div>
    </div>
  );
}

export default DownloadComponent;
