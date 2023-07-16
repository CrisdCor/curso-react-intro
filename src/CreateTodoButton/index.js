import "./CreateTodoButton.css";

function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      className="add-button"
      onClick={() => {
        setOpenModal((state) => !state);
      }}
    >
      AGREGAR TAREA
    </button>
  );
}

export { CreateTodoButton };
