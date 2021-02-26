import { render } from "@testing-library/react";
import React from "react";
import Selecto from "react-selecto";
import "./Blocks.css";
import { useSelector, useDispatch } from "react-redux";

export default function Blocks() {
  const cubes = [];

  for (let i = 0; i < 144; ++i) {
    cubes.push(i);
  }

  const color = useSelector((state) => {
    if (state.addTask.tasks.length - 1 >= 0)
      return state.addTask.tasks[state.addTask.tasks.length - 1].color;
  });

  return (
    <div className="blocks">
      <Selecto
        dragContainer={".elements"}
        selectableTargets={[".selecto-area .cube"]}
        hitRate={100}
        selectByClick={true}
        selectFromInside={true}
        continueSelect={true}
        ratio={0}
        onSelect={(e) => {
          e.added.forEach((el) => {
            el.classList.add("selected");
            el.style.background = color;
          });
          e.removed.forEach((el) => {
            el.classList.remove("selected");
          });
        }}
      ></Selecto>
      <div className="elements selecto-area" id="selecto1">
        {cubes.map((i) => (
          <div className="cube" key={i}></div>
        ))}
      </div>
    </div>
  );
}
