import React from "react";
import "./SearchCard.css";
import imgSearch from "../../images/Search-rafiki.svg";

const SearchCard = () => {
  return (
    <>
      <h3 className="search-text">
        Bem vindo ao App, Procure a cidade que deseja
      </h3>
      <div className="search-card">
        <img src={imgSearch} alt="" />
      </div>
    </>
  );
};

export default SearchCard;
