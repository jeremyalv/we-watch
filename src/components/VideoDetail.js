import React from "react";
import Loader from "./Loader";

const imageStyle = {
  borderRadius: "4px",
};

const loaderContainerStyle = {};
const loaderStyle = {
  margin: "8px auto 18px auto",
  fontSize: "1.4em",
};
const loaderMessageStyle = {
  textAlign: "center",
  fontSize: "1.4em",
};

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <Loader
        message="Please input search term"
        loaderContainerStyle={loaderContainerStyle}
        loaderStyle={loaderStyle}
        loaderMessageStyle={loaderMessageStyle}
      />
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <>
      <div className="ui embed">
        <iframe title="Video Player" src={videoSrc} style={imageStyle} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </>
  );
};

export default VideoDetail;
