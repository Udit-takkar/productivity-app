import React from "react";

const initialState = { color: "#eee" };

export default function SelectedColor(state = initialState, action) {
  switch (action.type) {
    case "SELECTED_COLOR": {
      console.log(action);
      return {
        color: action.payload.color,
      };
    }
    default: {
      return state;
    }
  }
}
