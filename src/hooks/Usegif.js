import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const UseGif = () => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData(Tag = "") {
    setLoading(true);
    const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}${
      Tag ? `&tag=${Tag}` : ""
    }`;

    try {
      const { data } = await axios.get(apiUrl);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
    } catch (error) {
      console.error("Error fetching data from Giphy API", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(); // Fetch a random GIF initially
  }, []);

  return { gif, loading, fetchData };
};

export default UseGif;
