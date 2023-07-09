import "./TodoCounter.css";

function TodoCounter({ completed, total }) {
  return (
    <h2 className="todo-counter">
      {completed === total
        ? "¡Felicidades! No tienes tareas pendientes."
        : `Has completado ${completed} de ${total} tareas.`}
    </h2>
  );
}

export { TodoCounter };
