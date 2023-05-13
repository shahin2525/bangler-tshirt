import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const tshirts = useLoaderData();
  console.log(tshirts);
  return (
    <div>
      <h2>I am from t-shirts: {tshirts.length}</h2>
    </div>
  );
};

export default Home;
