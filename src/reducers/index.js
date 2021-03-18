import { Select } from "@material-ui/core";
import React from "react";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import TaskReducer from "./AddTask";

const reducers = combineReducers({
  addTask: TaskReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default reducers;
