import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Display.css";
function Popular() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const movieUrl = `https://graceful-hoodie-deer.cyclic.app/title`;
    const makeApiCall = async () => {
      let res = await fetch(movieUrl);
      let data = await res.json();
      setMovieData(data);
      console.log("API is successful", data);
    };
    makeApiCall();
  }, []);

  const movieResult = movieData.map((item, index) => {
    return (
      <div className="result">
        <img key={item.movieId} alt="display" src={item.image} />
        <div className="text">
          <h6>{item.title}</h6>
          <br></br>
          <a>{item.plot}</a>
        </div>
      </div>
    );
  });
  return (
    <>
      <h2>Movie that available </h2>
      <nav>
        <Link to="/">
          <button>Home Page</button>
        </Link>
        <Link to="/Popular">
          <button>Latest in 2022</button>
        </Link>
      </nav>
      <div className="divResult"> {movieResult}</div>
    </>
  );
}

export default Popular;
