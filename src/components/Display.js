import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Popular.css";
function Popular() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const movieUrl = `https://dull-teal-penguin-tie.cyclic.app/title`;
    const makeApiCall = async () => {
      let res = await fetch(movieUrl);
      let data = await res.json();
      setMovieData(data);
      console.log("API is successful", data);
    };
    makeApiCall();
  }, []);

  const popResult = movieData.map((item, index) => {
    return (
      <div className="popular">
        <img key={item.movieId} alt="display" src={item.image} />
        <div className="instruction">
          <a>{item.title}</a>
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
          <button>Popular</button>
        </Link>
      </nav>
      <div>{popResult}</div>
    </>
  );
}

export default Popular;
