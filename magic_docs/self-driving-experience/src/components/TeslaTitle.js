import React from "react";
import TeslaTitleText from "./TeslaTitleText";
import '../style/App.css';

const TeslaTitle = () => {
  return (
    <div className="container">
      <img className="image" src="https://assets-eu-01.kc-usercontent.com/fb793c58-315a-0196-d3af-7c9c2613d52c/27036e98-598f-4ad5-b15a-4ea44ae80a99/Tesla%20Model%203.jpg" alt="tesla car" />
      <TeslaTitleText />
    </div>
  );
};



export default TeslaTitle;