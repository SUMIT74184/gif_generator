import React, { useEffect, useState } from "react";
import UseGif from "../hooks/Usegif.js";
import Spinner from "./Spinner.js";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  // const [gif, setGif] = useState("");
  // const [loading, setloading] = useState(false);

  // async function fetchData() {
  //   setloading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   console.log(imageSource);
  //   // console.log(output);
  //   setGif(imageSource);
  //   setloading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { gif, loading, fetchData } = UseGif();

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5  mt-[15px]">
      <h1 className=" mt-[15px] text-2xl underline uppercase font-semibold">
        Random Gifs
      </h1>

      {loading ? <Spinner /> : <img src={gif} width="450" alt />}

      <button
        onClick={clickHandler}
        className="w-10/12 bg-amber-500 text-lg py-2 rounded-lg font-bold mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
