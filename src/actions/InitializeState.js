import React from "react";

const InitializeState = (tasks) => {
  console.log(tasks);
  return {
    type: "INITIALIZE_STATE",
    payload: { tasks: tasks },
  };
};

export default InitializeState;
