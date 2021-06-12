import React from "react";

const SelectedColor = (color) => {
  return {
    type: "SELECTED_COLOR",
    payload: { color: color },
  };
};

export default SelectedColor;
