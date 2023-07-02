import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="item-container">
      <button className="check-item"></button>
      <p>{props.text}</p>
      <button className="trash-item"></button>
    </li>
  );
}

export { TodoItem };
