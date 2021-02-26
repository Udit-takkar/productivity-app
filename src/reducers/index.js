import { Select } from "@material-ui/core";
import React from "react";
import { combineReducers } from "redux";
import addTaskReducer from "./AddTask";
import DeleteTaskReducer from "./DeleteTaskReducer";

const reducers = combineReducers({
  addTask: addTaskReducer,
  deleteTask: DeleteTaskReducer,
});

export default reducers;
