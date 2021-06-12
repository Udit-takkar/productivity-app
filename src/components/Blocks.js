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
import "firebase/firestore";
import { useFirebase } from "react-redux-firebase";
import bgColorState from "../utils/bgColorState";

export default function Blocks() {
  const Elems = useRef([]);
  const firebase = useFirebase();
  const db = firebase.firestore();
  var currentSignedInUser = firebase.auth().currentUser;
  var docRef = db.collection("users").doc(currentSignedInUser.uid);

  useEffect(() => {
    const getData = () => {
      docRef
        .get()
        .then((doc) => {
          console.log(doc);
          if (doc.exists) {
            if (doc.data) {
              doc.data().bgColorState.forEach((color, index) => {
                bgColorState[index] = color;
              });
              console.log(bgColorState);
            }
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    };
    getData();
  }, []);

  const SelectedColor = useSelector((state) => {
    return state.SelectedColor.color;
  });
  const refElems = useCallback((element) => {
    Elems.current.push(element);
  }, []);

  const deleteId = useSelector((state) => {
    return state.addTask.deleteTask.id;
  });

  const deleteTaskColor = useSelector((state) => {
    return state.addTask.deleteTask.color;
  });

  useEffect(() => {
    const indexes = [];
    bgColorState.forEach((color, index) => {
      if (color === deleteTaskColor) {
        indexes.push(index);
        console.log(index);
      }
    });

    Elems.current.forEach((e) => {
      const index = parseInt(e.getAttribute("index"), 10);
      if (e && deleteId) {
        if (indexes.includes(index)) {
          e.style.background = "#eeeeee";
          bgColorState[index] = "#eee";
        }
      }
    });
  }, [deleteTaskColor]);

  return (
    <>
      <div style={{ display: "block", marginLeft: "30px" }}>
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
            // console.log(e);
            e.added.forEach((el) => {
              if (el.style.background == "rgb(238, 238, 238)") {
                el.style.background = SelectedColor;
                const index = parseInt(el.getAttribute("index"), 10);
                bgColorState[index] = SelectedColor;
              }
            });

            e.removed.forEach((el) => {
              if (el.style.background === SelectedColor) {
                el.style.background = "#eee";
                const index = parseInt(el.getAttribute("index"), 10);
                bgColorState[index] = "#eee";
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
              style={{ background: `${bgColorState[i]}` }}
              key={i}
              index={i}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
