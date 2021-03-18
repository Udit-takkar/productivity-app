import React from "react";

const intialState = { tasks: [], deleteId: {} };
export default function TaskReducer(state = intialState, action) {
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
        deleteId: {},
      };
    }

    case "DELETE_TASK": {
      const newTasks = state.tasks.filter((task) => {
        return task.id !== action.payload.id;
      });
      // console.log(newTasks);
      newTasks.deleteId = action.payload.id;
      return { tasks: newTasks };
    }

    default: {
      return state;
    }
  }
}
