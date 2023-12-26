import React from "react";

function DownloadOption({
  activeNav,
  videoInfo,
  videoUrl,
}: {
  activeNav: string;
  videoInfo: {
    hasAudio: boolean;
    hasVideo: boolean;
    qualityLabel: string;
    url: string;
    container: string;
    itag: number;
  }[];
  videoUrl: string;
}) {
  return (
    <ul className=" overflow-y-scroll max-h-[20rem] snap-y download_list">
      {activeNav === "Video" &&
        videoInfo.map((video) => {
          if (video.hasAudio && video.hasVideo) {
            return (
              <li
                key={video.itag}
                className="flex justify-between p-2 snap-start"
              >
                <p>{video.container + " - " + video.qualityLabel}</p>
                <button className="bg-red-500 px-2 py-1 rounded-md hover:scale-110 transition-all duration-100">
                  <a
                    href={`https://ytr-downloader.onrender.com/download-yt?videoURL=${videoUrl}&iTag=${video.itag}`}
                    download
                  >
                    Download
                  </a>
                </button>
              </li>
            );
          }
        })}

      {activeNav === "Audio" &&
        videoInfo.map((video) => {
          if (video.hasAudio && !video.hasVideo) {
            return (
              <li
                key={video.itag}
                className="flex justify-between p-2 snap-start"
              >
                <p>.{video.container}</p>
                <button className="bg-red-500 px-2 py-1 rounded-md hover:scale-110 transition-all duration-100">
                  <a
                    href={`https://ytr-downloader.onrender.com/download-yt?videoURL=${videoUrl}&iTag=${video.itag}`}
                    download
                    onError={() => alert("error")}
                  >
                    Download
                  </a>
                </button>
              </li>
            );
          }
        })}
    </ul>
  );
}

export default DownloadOption;
