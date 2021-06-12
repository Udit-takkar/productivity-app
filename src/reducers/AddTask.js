import React from "react";

const intialState = { tasks: [], deleteTask: { id: null, color: null } };
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
        deleteTask: { id: null, color: null },
      };
    }

    case "DELETE_TASK": {
      const newTasks = state.tasks.filter((task) => {
        return task.id !== action.payload.id;
      });
      // console.log(newTasks);
      const deleteTask = {
        id: action.payload.id,
        color: action.payload.color,
      };
      return { tasks: newTasks, deleteTask };
    }
    case "INITIALIZE_STATE": {
      console.log(action.payload);
      return {
        tasks: action.payload.tasks,
        deleteTask: { id: null, color: null },
      };
    }
    default: {
      return state;
    }
  }
}
