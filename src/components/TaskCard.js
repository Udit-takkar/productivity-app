import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../css/Taskcard.css";
import DeleteIcon from "@material-ui/icons/Delete";
import allActions from "../actions/index";
import { useEffect } from "react";
import { useFirebase } from "react-redux-firebase";

export default function TaskCard() {
  const firebase = useFirebase();
  const db = firebase.firestore();
  var currentSignedInUser = firebase.auth().currentUser;
  var docRef = db.collection("users").doc(currentSignedInUser.uid);

  const tasks = useSelector((state) => {
    return state.addTask.tasks;
  });

  useEffect(() => {
    const getData = () => {
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            if (doc.data) {
              // setbgColor(doc.data().bgColorState);
              const tasks = doc.data().tasks;
              console.log(tasks);
              dispatch(allActions.InitializeState(tasks));
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

  const dispatch = useDispatch();

  const taskList = tasks.map((task) => {
    return (
      <div key={task.id} className="task-card">
        <div
          style={{ backgroundColor: task.color }}
          className="color-box"
        ></div>

        <div className="task-name">{task.task}</div>
        <div className="delete-button-container">
          <button
            onClick={() => {
              // console.log(task.id);
              dispatch(
                allActions.DeleteTask({ id: task.id, color: task.color })
              );
            }}
            className="delete-button"
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    );
  });

  return <div>{taskList}</div>;
}
