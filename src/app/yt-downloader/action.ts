"use server";

import ytdl from "youtubedl-core";
const fs = require("fs");

export const getYTDownloadLink = async ({ videoUrl }: { videoUrl: string }) => {
  if (!videoUrl) return { error: "No video url" };

  try {
    const validateUrl = ytdl.validateURL(videoUrl);
    if (!validateUrl) return { error: "Not valid url", data: null };

    const url = videoUrl;
    const metaInfo = await ytdl.getInfo(url);

    let data = {
      url: videoUrl,
      info: metaInfo.formats,
      themnails: metaInfo.videoDetails.thumbnails,
      title: metaInfo.videoDetails.title,
      views: metaInfo.videoDetails.viewCount,
      length: metaInfo.videoDetails.lengthSeconds,
      description: metaInfo.videoDetails.description,
    };

    return { data, error: null };
  } catch (error) {
    return { error: error };
  }
};
