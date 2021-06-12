import React, { useEffect } from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import firebase from "firebase/app";
import "firebase/firestore";
import { useState } from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import "../css/Header.css";
import Button from "@material-ui/core/Button";
import bgColorState from "../utils/bgColorState";

function Header() {
  const firebase = useFirebase();
  const history = useHistory();
  const db = firebase.firestore();

  var currentSignedInUser = firebase.auth().currentUser;

  const tasks = useSelector((state) => {
    return state.addTask.tasks;
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(currentSignedInUser.displayName);
      } else {
        console.log("I am signed out");
      }
    });
  }, []);

  const SignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Sign Out");
        localStorage.clear();
        history.push("/");
      })
      .catch((err) => console.error(err));
  };

  const SaveData = () => {
    db.collection("users").doc(currentSignedInUser.uid).set({
      tasks: tasks,
      bgColorState: bgColorState,
    });
  };
  return (
    <div>
      <div className="btns" style={{ display: "flex" }}>
        <Button
          id="btn"
          onClick={SignOut}
          variant="contained"
          color="secondary"
        >
          Sign Out
        </Button>

        <Button
          id="btn"
          href={"https://github.com/Udit-takkar/productivity-app"}
          variant="outlined"
        >
          View on Github
        </Button>
        <Button id="btn" onClick={SaveData} variant="outlined">
          Save tasks
        </Button>
      </div>
    </div>
  );
}

export default Header;
