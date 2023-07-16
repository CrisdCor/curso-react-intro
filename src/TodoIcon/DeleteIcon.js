import React from "react";
import { TodoIcon } from "./";

function DeleteIcon({ onDelete }) {
  return <TodoIcon type="delete" color="#D9D9D9" onClick={onDelete} />;
}

export { DeleteIcon };
