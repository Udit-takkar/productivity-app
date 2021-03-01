import React from "react";

const DeleteTask = ({ id }) => {
  // console.log(id);
  return {
    type: "DELETE_TASK",
    payload: { id: id },
  };
};

export default DeleteTask;
