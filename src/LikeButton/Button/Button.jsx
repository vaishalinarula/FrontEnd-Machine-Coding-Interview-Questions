import React from "react";
import { FaFighterJet, FaHeart } from "react-icons/fa";

const Button = ({ onClick, liked, loading, error }) => {
  return (
    <div>
      <span>Like Button</span>
      <button
        style={{ color: liked === true ? "red" : "black" }}
        onClick={onClick}
      >
        {loading === true ? <FaFighterJet /> : <FaHeart />}
      </button>
      {error || null}
    </div>
  );
};

export default Button;
