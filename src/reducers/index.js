import { Select } from "@material-ui/core";
import React from "react";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import TaskReducer from "./AddTask";
import SelectedColor from "./SelectedColor";

const reducers = combineReducers({
  addTask: TaskReducer,
  SelectedColor,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default reducers;
