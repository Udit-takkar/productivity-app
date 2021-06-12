import React from "react";

export default function DeleteSelectedBlocks({ id, color }) {
  return {
    type: "DELETE_SELECTED_BLOCKS",
    payload: { id: id, color: color },
  };
}
