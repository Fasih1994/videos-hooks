import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
        className="ui active inverted dimmer"
      >
        <div className="ui text loader">Loading</div>
      </div>
    );
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div style={{ backgroundColor: "whitesmoke" }} className="ui segment">
        <h4 className="header">{video.snippet.title}</h4>
        <p className="description">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
