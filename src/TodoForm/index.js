import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <label>Agrega tu nueva tarea</label>
      <textarea value={newTodoValue} onChange={onChange} required />
      <div className="buttons-container">
        <button type="" className="buttons-container-button--add">
          Agregar
        </button>
        <button
          className="buttons-container-button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cerrar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
