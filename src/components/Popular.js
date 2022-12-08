import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Popular.css";
function Popular() {
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
        <div className="name">
          <a>
            Rank {index + 1} : {item.strDrink}
          </a>
          <ul className="nobullet">
            <li>Major ingredients include: </li>
            <li>{item.strIngredient1}</li>
            <li>{item.strIngredient2}</li>
            <li>{item.strIngredient3}</li>
            <li>{item.strIngredient4 == null ? null : item.strIngredient4}</li>
          </ul>
        </div>
        <div className="instruction">
          <span>Instruction - how to make it? </span> <br></br>
          <a>{item.strInstructions}</a>
        </div>
      </div>
    );
  });
  return (
    <>
      <h2>List of top 20 most popular cocktail </h2>
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

export default Popular;
