import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../css/Taskcard.css";
import DeleteIcon from "@material-ui/icons/Delete";
import allActions from "../actions/index";
import { useEffect } from "react";

export default function TaskCard() {
  const tasks = useSelector((state) => {
    console.log(state);
    return state.addTask.tasks;
  });

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
              dispatch(allActions.DeleteTask({ id: task.id }));
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
