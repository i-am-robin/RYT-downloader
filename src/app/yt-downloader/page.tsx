"use client";
import React, { useState } from "react";
import { getYTDownloadLink } from "./action";
import { toast } from "sonner";
import DownloadComponent from "./DownloadComponent";
import LoadingUi from "./LoadingUi";
import { FaArrowDown } from "react-icons/fa6";

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
  description: string;
  url: string;
  views: string;
};

function YTDownloader() {
  const [videoUrl, setVideoUrl] = useState<string | undefined>("");
  const [videoData, setVideodata] = useState<TVideoObject | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleLinkSubmit = async () => {
    if (loading) return;
    setLoading(true);

    if (!videoUrl) {
      setLoading(false);
      return toast.warning("Please add video URL");
    }

    const res: { data?: any; error?: any } = await getYTDownloadLink({
      videoUrl,
    });

    console.log(res);
    if (res.error) {
      toast(res.error as string);
      setLoading(false);
      return;
    }
    setVideodata(res?.data);
    setLoading(false);
  };

  return (
    <article className="flex flex-col items-center pt-20 h-screen overflow-hidden p-2 w-screen overflow-y-scroll bg-[#08003A] text-white">
      <div className="text-center">
        <h1 className="text-2xl font-bold">YTRobin Downloader</h1>
        <p>YTRD Let you to download any youtuve video with video link</p>

        <div className="flex w-[100%] md:w-[100%] shadow-md mx-auto mt-3 bg-white rounded-md overflow-hidden p-1">
          <input
            value={videoUrl}
            onChange={(e) => {
              setVideoUrl(e.target.value);
              console.log(videoUrl);
            }}
            type="text"
            placeholder="video url..."
            className="bg-white h-full w-full px-2 py-3 rounded-l-md font-medium outline-none text-black"
          />

          <button
            onClick={handleLinkSubmit}
            className={`px-2 transition-all duration-300 flex flex-row items-center gap-2 text-white  rounded group ${
              loading ? "bg-red-400" : "hover:bg-opacity-90 bg-red-500"
            }`}
          >
            {!loading ? "Download" : "Loading"}
            <FaArrowDown className="group-hover:animate-bounce transition-all duration-300" />
          </button>
        </div>

        {videoData && !loading && <DownloadComponent videoData={videoData} />}
        {loading && <LoadingUi />}
      </div>
    </article>
  );
}

export default YTDownloader;

//
