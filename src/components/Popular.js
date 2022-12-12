import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Popular.css";
function Popular() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const movieUrl = `https://imdb-api.com/en/API/SearchMovie/k_91dc2llz/fast`;
    const makeApiCall = async () => {
      let res = await fetch(movieUrl);
      let data = await res.json();
      setMovieData(data.results);
      console.log("API is successful");
    };
    makeApiCall();
  }, []);

  const popResult = movieData.map((item, index) => {
    return (
      <div className="popular">
        <img key={item.id} alt="display" src={item.image} />
        <div className="instruction">
          <a>{item.title}</a>
        </div>
      </div>
    );
  });
  return (
    <>
      <h2>Randon Movie Selection </h2>
      <nav>
        <Link to="/">
          <button>Home Page</button>
        </Link>
      </nav>
      <div>{popResult}</div>
    </>
  );
}

export default Popular;
