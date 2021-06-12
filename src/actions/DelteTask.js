import React from "react";

const DeleteTask = ({ id, color }) => {
  return {
    type: "DELETE_TASK",
    payload: { id: id, color: color },
  };
};

export default DeleteTask;
