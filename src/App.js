import React from "react";
import { TodoContainer } from "./TodoContainer";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoTitle } from "./TodoTitle";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de React.js", completed: false },
  { text: "Llorar un ratico", completed: false },
  { text: "Otro pendiente", completed: false },
  { text: "Otro pendiente más", completed: false },
];

function App() {
  return (
    <>
      <TodoContainer>
        <TodoTitle />
        <TodoCounter completed={16} total={25} />
        <TodoSearch />
        <TodoList>
          {defaultTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
      </TodoContainer>
    </>
  );
}

export default App;
