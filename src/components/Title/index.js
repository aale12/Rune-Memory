import React from "react";
import "./style.css";

function Title(props) {
  return (

    <div className="row col-sm-12">
      <h2 className="danger col-sm-1" onClick={() => props.setMode()}>Hard Mode</h2>
      <div className="spacer col-sm-1"></div>
      <h2 className="peripheral modalButton col-sm-1">Instructions</h2>
      <div className="spacer col-sm-1"></div>
      <h1 className="title col-sm-4">{props.children}</h1>
      <div className="spacer col-sm-1"></div>
      <h2 className="peripheral col-sm-1">Score:{props.score}</h2>
      <div className="spacer col-sm-1"></div>
      <h2 className="peripheral col-sm-1">High Score:{props.highScore}</h2>
    </div>


  );
}

export default Title;
