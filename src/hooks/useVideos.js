import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  // setTimeout(async (term) => {
  //   try {
  //     const response = await youtube.get("/search", {
  //       params: {
  //         q: term,
  //       },
  //     });

  //     let videosList = response.data.items;

  //     setVideos(videosList);
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // }, 5000);
  // const search = function x() {
  //   return 2;
  // };

  const search = async (term) => {
    try {
      const response = await youtube.get("/search", {
        params: {
          q: term,
        },
      });

      let videosList = response.data.items;

      setVideos(videosList);
    } catch (e) {
      console.log(e.message);
    }
  };

  return [videos, search];
};

export default useVideos;
