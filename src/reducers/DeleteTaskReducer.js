const intialState = { tasks: [] };

export default function DeleteTaskReducer(state = intialState, action) {
  switch (action.type) {
    case "DELETE_TASK": {
      // console.log(state.tasks);
      return state.tasks.filter(({ id }) => {
        return id !== action.payload.id;
      });
    }

    default:
      return state;
  }
}
