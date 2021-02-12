import React from "react";
import "./VideoItem.css";
import videoDecode from "../videoDecode";

const videoImageStyle = {
  margin: "6px",
  borderRadius: "4px",
};

const VideoItem = ({ video, onVideoSelect }) => {
  // Decodes any unreadable strings from video.
  video = videoDecode(video);

  console.log(video.snippet.title);

  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        style={videoImageStyle}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
        <div className="channelTitle">{video.snippet.channelTitle}</div>
      </div>
    </div>
  );
};

export default VideoItem;
