import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Display.css";
function Display() {
  const [drinkData, setDrinkData] = useState([]);

  useEffect(() => {
    const drinkUrl = `https://www.thecocktaildb.com/api/json/v2/9973533/popular.php`;
    const makeApiCall = async () => {
      let res = await fetch(drinkUrl);
      let data = await res.json();
      if (data.drinks === "None Found") {
        setDrinkData([]);
      } else {
        setDrinkData(data.drinks);
      }
      console.log("API3 is successful", data.drinks);
    };
    makeApiCall();
  }, []);

  const popResult = drinkData.map((item, index) => {
    return (
      <div className="popular">
        <img key={index} alt="display" src={item.strDrinkThumb} />
        <div className="name"></div>
      </div>
    );
  });
  return (
    <>
      <nav>
        <Link to="/">
          <button>Home Page</button>
        </Link>
        <Link to="/Search">
          <button>Search</button>
        </Link>
      </nav>
      <div>{popResult}</div>
    </>
  );
}

export default Display;
