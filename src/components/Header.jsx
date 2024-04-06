import React from "react";
import logo from "../assets/react-core-concepts.png";

const reactDescription=["Fundamental", "Core", "Cruicial"];

function getRandomNum(max){
  return Math.floor(Math.random()*(max+1));
}

export default function Header(){
  const description=reactDescription[getRandomNum(2)];
  return(
    <header>
        <img src={logo} alt="logo"></img>
        <h1>React Essentials</h1>
        <p>{description} React concepts you will need for almost any app you are going to build!</p>
      </header>
  );
}
