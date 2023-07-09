import "./TodoItem.css";
import { CompleteIcon } from "./CompleteIcon.js";
import { DeleteIcon } from "./DeleteIcon.js";

function TodoItem(props) {
  return (
    <li className="item-container">
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      <p className={`text-item ${props.completed && "text-item--complete"}`}>
        {props.text}
      </p>
      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
}

export { TodoItem };
