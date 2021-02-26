import React from "react";

const DeleteTask = ({ id }) => {
  return {
    type: "DELETE_TASK",
    payload: { id: id },
  };
};

export default DeleteTask;
