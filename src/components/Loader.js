import React from "react";

const Loader = ({
  message = "Loading...",
  loaderContainerStyle = {},
  loaderStyle = {},
  loaderMessageStyle = {},
}) => {
  return (
    <div style={loaderContainerStyle}>
      <div class="ui active centered inline loader" style={loaderStyle}></div>
      <p style={loaderMessageStyle}>{message}</p>
    </div>
  );
};

export default Loader;
