import React from "react";

const AddTask = ({ color, id, task }) => {
  return {
    type: "ADD_TASK",
    payload: { color: color, id: id, task: task },
  };
};

export default AddTask;
