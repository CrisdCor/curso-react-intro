import "./TodoItem.css";
import checkIcon from "./assets/icons/check.svg";
import trashIcon from "./assets/icons/trash.svg";

function TodoItem(props) {
  return (
    <li className="item-container">
      <span className="icon-item">
        <img
          className={`check-item ${props.completed && "check-item--active"}`}
          src={checkIcon}
          alt="icono de check"
        />
      </span>
      <p className={`text-item ${props.completed && "text-item--complete"}`}>
        {props.text}
      </p>
      <span className="icon-item trash-item">
        <img src={trashIcon} alt="icono de eliminar" />
      </span>
    </li>
  );
}

export { TodoItem };
