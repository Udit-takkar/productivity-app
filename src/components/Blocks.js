import { render } from "@testing-library/react";
import React from "react";
import Selecto from "react-selecto";
import "../css/Blocks.css";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect, useCallback, useState } from "react";
import ReactTooltip from "react-tooltip";
import Header from "./Header";
import "firebase/firestore";
import cubes from "../utils/cubes";
import time from "../utils/time";

export default function Blocks() {
  const Elems = useRef([]);

  const color = useSelector((state) => {
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

  const tasks = useSelector((state) => {
    return state.addTask.tasks;
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
    <>
      <div style={{ display: "inline" }}>
        <Header />
      </div>

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
              if (el.style.background == "rgb(238, 238, 238)") {
                el.classList.add("selected");
                el.classList.add(taskId);
                el.style.background = color;
                console.log(el);
              }
              // updateMap(taskId,[...Hashmap,el.key])
              // el.id=taskId;
            });

            e.removed.forEach((el) => {
              if (el.classList.contains(taskId)) {
                el.classList.remove(...el.classList);
                el.classList.add("cube");
                el.style.background = "#eee";
              }
            });
          }}
        ></Selecto>

        <div className="elements selecto-area" id="selecto1">
          <ReactTooltip textColor="black" backgroundColor="white" />
          {cubes.map((i) => (
            <div
              className="cube"
              data-tip={time[i]}
              ref={refElems}
              style={{ background: "#eee" }}
              key={i}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
