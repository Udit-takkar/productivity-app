import { Select } from "@material-ui/core";
import React from "react";
import { combineReducers } from "redux";
import TaskReducer from "./AddTask";

const reducers = combineReducers({
  addTask: TaskReducer,
});

export default reducers;
