import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Popular.css";
function Popular() {
  const [movieData, setMovieData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5362c3f347msh0ada21d8be2ead9p16bc15jsn41c00b1e2f1f",
      "X-RapidAPI-Host": "ott-details.p.rapidapi.com",
    },
  };

  useEffect(() => {
    //const movieUrl = `https://imdb-api.com/en/API/SearchMovie/k_91dc2llz/fast`;
    // const makeApiCall = async () => {
    //   let res = await fetch(movieUrl);
    //   let data = await res.json();
    //   setMovieData(data.results);
    //   console.log("API is successful");}
    // const movieUrl = `https://ott-details.p.rapidapi.com/getnew?region=US`;
    // const makeApiCall = async () => {
    //   let res = await fetch(movieUrl, options);
    //   let data = await res.json();
    //   setMovieData(data.results);
    //   console.log("API is successful");
    // };
    // makeApiCall();
    const options = {
      method: "GET",
      url: "https://ott-details.p.rapidapi.com/advancedsearch",
      params: {
        start_year: "2022",
        end_year: "2023",
        min_imdb: "7",
        //max_imdb: "10",
        // genre: "action" || "comedy",
        language: "english",
        type: "movie",
        sort: "highestrated",
        // page: "1",
      },
      headers: {
        "X-RapidAPI-Key": "5362c3f347msh0ada21d8be2ead9p16bc15jsn41c00b1e2f1f",
        "X-RapidAPI-Host": "ott-details.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMovieData(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const popResult = movieData.map((item, index) => {
    return (
      <div className="result">
        <img key={item.imbid} alt="Image Not Available" src={item.imageurl} />
        <h6>{item.title}</h6>
        <h8>{item.genre}</h8>
        <br></br>
        <a>{item.synopsis}</a>
      </div>
    );
  });
  return (
    <>
      <h2>Lastest Movie in 2022 </h2>
      <nav>
        <Link to="/">
          <Button>Home Page</Button>
        </Link>
      </nav>
      <div className="divResult">{popResult}</div>
    </>
  );
}

export default Popular;
