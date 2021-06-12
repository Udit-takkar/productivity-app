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

  // const [savedbgColorState, setbgColor] = useState([]);

  useEffect(() => {
    const getData = () => {
      docRef
        .get()
        .then((doc) => {
          console.log(doc);
          if (doc.exists) {
            if (doc.data) {
              // setbgColor(doc.data().bgColorState);
              doc.data().bgColorState.forEach((color, index) => {
                bgColorState[index] = color;
              });
              console.log(bgColorState);
            }
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    };
    getData();
  }, []);

  // const color = useSelector((state) => {
  //   if (state.addTask.tasks.length - 1 >= 0)
  //     return state.addTask.tasks[state.addTask.tasks.length - 1].color;
  // });
  const SelectedColor = useSelector((state) => {
    return state.SelectedColor.color;
  });
  const refElems = useCallback((element) => {
    Elems.current.push(element);
  }, []);

  // const bgColorState=useSelector((state) => {
  //   return state.firestore.data.bgColorState
  // })

  const taskId = useSelector((state) => {
    // console.log(state.addTask.tasks[state.addTask.tasks.length - 1].id);
    if (state.addTask.tasks.length - 1 >= 0)
      return state.addTask.tasks[state.addTask.tasks.length - 1].id;
  });

  const deleteId = useSelector((state) => {
    return state.addTask.deleteTask.id;
  });

  const tasks = useSelector((state) => {
    return state.addTask.tasks;
  });

  useEffect(() => {
    Elems.current.map((e) => {
      if (e && deleteId && e.classList.contains(deleteId)) {
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
            // console.log(e);
            e.added.forEach((el) => {
              if (el.style.background == "rgb(238, 238, 238)") {
                el.classList.add("selected");
                el.classList.add(taskId);
                el.style.background = SelectedColor;
                const index = parseInt(el.getAttribute("index"), 10);
                bgColorState[index] = SelectedColor;

                // console.log(el);
              }
              // updateMap(taskId,[...Hashmap,el.key])
              // el.id=taskId;
            });

            e.removed.forEach((el) => {
              if (el.classList.contains(taskId)) {
                el.classList.remove(...el.classList);
                el.classList.add("cube");
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
