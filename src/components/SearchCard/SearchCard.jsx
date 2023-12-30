import React from "react";
import "./SearchCard.css";
import imgSearch from "../../images/Search-rafiki.svg";

const SearchCard = ({ children }) => {
  return (
    <div className="search-card">
      {children}
      <h3 className="search-text">
        Bem vindo ao App, Procure a cidade que deseja
      </h3>
      <div className="search-img">
        <img src={imgSearch} alt="" />
      </div>
    </div>
  );
};

export default SearchCard;
