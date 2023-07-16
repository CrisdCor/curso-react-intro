import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <h2 className="todo-counter">
      {completedTodos === totalTodos
        ? "¡Felicidades! No tienes tareas pendientes."
        : `Has completado ${completedTodos} de ${totalTodos} tareas.`}
    </h2>
  );
}

export { TodoCounter };
