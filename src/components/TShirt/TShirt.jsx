import React from "react";
import "./TShirt.css";

const TShirt = ({ tshirt, handleCart }) => {
  const { name, picture, price } = tshirt;

  return (
    <div className="tshirt">
      <img src={picture} alt="" />
      <h2>{name}</h2>
      <p>{price}</p>
      <button onClick={() => handleCart(tshirt)}>Buy-me</button>
    </div>
  );
};

export default TShirt;
