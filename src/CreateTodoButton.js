import "./CreateTodoButton.css";

function CreateTodoButton() {
  return (
    <button className="add-button" onClick={() => console.log("Diste clic")}>
      AGREGAR TAREA
    </button>
  );
}

export { CreateTodoButton };
