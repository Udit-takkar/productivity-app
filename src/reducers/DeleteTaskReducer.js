const intialState = { tasks: [] };

export default function DeleteTaskReducer(state = intialState, action) {
  switch (action.type) {
    case "DELETE_TASK": {
      console.log(state);
      return state.tasks.filter((task) => {
        return task.id !== action.payload.id;
      });
    }

    default:
      return state;
  }
}
