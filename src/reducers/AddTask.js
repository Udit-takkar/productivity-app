import React from "react";

const intialState = { tasks: [] };
export default function addTaskReducer(state = intialState, action) {
  switch (action.type) {
    case "ADD_TASK": {
      return {
        tasks: [
          ...state.tasks,
          {
            task: action.payload.task,
            id: action.payload.id,
            color: action.payload.color,
          },
        ],
      };
    }

    default: {
      return state;
    }
  }
}
