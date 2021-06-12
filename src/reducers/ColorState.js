import React from "react";
import bgColorState from "../utils/bgColorState";

const initialState = bgColorState;

export default function SelectedColor(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_BLOCKS_COLOR": {
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
