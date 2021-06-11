import React from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import firebase from "firebase/app";
import "firebase/firestore";
import { useState } from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import "../css/Header.css";
import Button from "@material-ui/core/Button";

function Header() {
  const firebase = useFirebase();
  const history = useHistory();
  const db = firebase.firestore();

  var currentSignedInUser = firebase.auth().currentUser;

  const [ShowLastSavedTasks, setShowLastSavedTasks] = useState(false);
  const [LastSavedTasks, setLastSavedTasks] = useState([]);

  var docRef = db.collection("users").doc(currentSignedInUser.uid);
  const getData = () => {
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", [...doc.data().tasks]);
          setShowLastSavedTasks(() => {
            return !ShowLastSavedTasks;
          });
          setLastSavedTasks(() => {
            return doc.data().tasks.map(({ task }) => {
              return task;
            });
          });
        } else {
          // doc.data() will be undefined in this case

          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };
  const tasks = useSelector((state) => {
    return state.addTask.tasks;
  });

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(currentSignedInUser.displayName);
    } else {
      console.log("I am signed out");
    }
  });
  const SignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Sign Out");
        history.push("/");
      })
      .catch((err) => console.error(err));
  };

  const SaveData = () => {
    db.collection("users").doc(currentSignedInUser.uid).set({
      tasks: tasks,
    });
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className="btns">
          <Button onClick={SignOut} variant="contained" color="secondary">
            Sign Out
          </Button>
          <Button onClick={getData} variant="outlined">
            View Last Saved Tasks
          </Button>
          <Button onClick={SaveData} variant="outlined">
            Save tasks
          </Button>
        </div>
        {ShowLastSavedTasks && (
          <div className="last_saved_tasks">
            <div className="task_box_heading">
              <h1>{currentSignedInUser.displayName}'s Yesterday </h1>
            </div>
            {LastSavedTasks.map((task) => {
              return (
                <div className="task_box">
                  <div className="task_box_tasks">{task}</div>
                  <HighlightOffIcon
                    className="close_btn"
                    onClick={() => setShowLastSavedTasks(!ShowLastSavedTasks)}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
