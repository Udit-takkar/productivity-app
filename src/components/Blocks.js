import { render } from "@testing-library/react";
import React from "react";
import Selecto from "react-selecto";
import "./Blocks.css";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect, useCallback, useState } from "react";

export default function Blocks() {
  const cubes = [];
  const Elems = useRef([]);

  for (let i = 0; i < 144; ++i) {
    cubes.push(i);
  }

  const color = useSelector((state) => {
    console.log(state.addTask);
    if (state.addTask.tasks.length - 1 >= 0)
      return state.addTask.tasks[state.addTask.tasks.length - 1].color;
  });

  const refElems = useCallback((element) => {
    Elems.current.push(element);
  }, []);

  const taskId = useSelector((state) => {
    // console.log(state.addTask.tasks[state.addTask.tasks.length - 1].id);
    if (state.addTask.tasks.length - 1 >= 0)
      return state.addTask.tasks[state.addTask.tasks.length - 1].id;
  });

  const deleteId = useSelector((state) => {
    return state.addTask.tasks.deleteId;
  });

  useEffect(() => {
    Elems.current.map((e) => {
      if (e.classList.contains(deleteId)) {
        e.classList.remove(deleteId);
        e.classList.remove("selected");
        e.style.background = "#eeeeee";
      }
    });
  }, [deleteId]);

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
            console.log(taskId);
            el.classList.add(taskId);
            // updateMap(taskId,[...Hashmap,el.key])
            // el.id=taskId;
          });
          e.removed.forEach((el) => {
            el.classList.remove("selected");
            el.style.background = "#eeeeee";
          });
        }}
      ></Selecto>
      <div className="elements selecto-area" id="selecto1">
        {cubes.map((i) => (
          <div
            className="cube"
            data-tip-top="test"
            ref={refElems}
            key={i}
          ></div>
        ))}
      </div>
    </div>
  );
}
