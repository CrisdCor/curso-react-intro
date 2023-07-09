import React from "react";
import { TodoIcon } from "./TodoIcon.js";

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? "#88EF78" : "#C9C9C9"}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };
