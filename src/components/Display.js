import { React, useEffect, useState, useContext } from "react";
import { useLocalStorage } from "@har4s/use-local-storage";
import { Link } from "react-router-dom";
import AuthContext from "./context/AuthProvider";
import Button from "react-bootstrap/Button";

import "./Display.css";
function Display() {
  const [movieData, setMovieData] = useState([]);
  const { auth } = useContext(AuthContext);
  const [uid, setUid] = useLocalStorage("UID");
  useEffect(() => {
    console.log("CHECK", uid);
    const movieUrl = `https://graceful-hoodie-deer.cyclic.app/title`;

    const makeApiCall = async () => {
      let res = await fetch(movieUrl);
      let data = await res.json();
      setMovieData(data);
      console.log("API is successful", data);
    };
    if (uid === null) {
      alert("You have no access");
      return;
    } else {
      makeApiCall();
    }
  }, []);

  const movieResult = movieData.map((item, index) => {
    return (
      <div className="result">
        <img key={item.movieId} alt="display" src={item.image} />
        <div className="text">
          <a>{item.title}</a>
          <br></br>
          <a>{item.plot}</a>
        </div>
      </div>
    );
  });

  const handleSignOut = async (e) => {
    e.preventDefault();
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    fetch(
      "https://graceful-hoodie-deer.cyclic.app/auth/signout",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        setUid(null);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <h2>Movie that available </h2>
      <nav>
        <Link to="/">
          <Button>Home Page</Button>
        </Link>
        <Link to="/Popular">
          <Button>Popular</Button>
        </Link>
        <Button onClick={handleSignOut}>Sign Out </Button>
      </nav>
      <div className="divResult">{movieResult}</div>
    </>
  );
}

export default Display;
