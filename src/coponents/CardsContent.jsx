import React from "react";
import { Cards } from "./Cards";
import data from "../data";

export const CardsContent = () => {
  const dataCards = data.map((dato) => {
    return (
      <Cards info ={dato}
      />
    );
  });
  return <div>{dataCards}</div>;
};
