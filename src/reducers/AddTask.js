import React from "react";

const intialState = { tasks: [] };
export default function TaskReducer(state = intialState, action) {
  switch (action.type) {
    case "ADD_TASK": {
      console.log(state);
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

    case "DELETE_TASK": {
      const newTasks = state.tasks.filter((task) => {
        return task.id !== action.payload.id;
      });

      return { tasks: newTasks };
    }

    default: {
      return state;
    }
  }
}
