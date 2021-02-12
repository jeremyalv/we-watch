import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  // setSelectedVideo(response.data.items[0]);
  // This is our custom Hook. It expects a default search term, and it's also used for a singular purpose.
  // useVideos returns an array containing the requested list of videos and a search function
  const [videos, search] = useVideos("React JS");

  // After first render, select the first video from the returned response object as the played video.
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div
            className={
              selectedVideo ? "eleven wide column" : "sixteen wide column"
            }
          >
            <VideoDetail video={selectedVideo} />
          </div>
          <div className={selectedVideo ? "five wide column" : ""}>
            <VideoList
              videos={videos}
              onVideoSelect={(video) => setSelectedVideo(video)}
              // equivalent to
              // onVideoSelect={setSelectedVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
