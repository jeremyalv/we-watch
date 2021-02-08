import React from "react";
// import { css } from "@emotion/react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        video={video}
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  return (
    <div className="ui relaxed divided list">
      <div>{renderedList}</div>
    </div>
  );
};

export default VideoList;
