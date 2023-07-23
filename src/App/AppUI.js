import React from "react";
import { TodoContainer } from "../TodoContainer/";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoLoading } from "../TodoLoading";
import { TodoError } from "../TodoError";
import { TodoEmpty } from "../TodoEmpty";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoForm } from "../TodoForm";
import { TodoTitle } from "../TodoTitle";
import { Modal } from "../Modal";
import { TodoContext } from "../TodoContext";
import { TodoSign } from "../TodoSign";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoContainer>
        <TodoTitle />
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {loading && <TodoLoading />}
          {error && <TodoError />}
          {!loading && searchedTodos.length === 0 && <TodoEmpty />}

          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButton setOpenModal={setOpenModal} />
        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
        <TodoSign />
      </TodoContainer>
    </>
  );
}

export { AppUI };
