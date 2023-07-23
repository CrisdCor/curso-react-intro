import React from "react";
import SignLogo from "../assets/logos/Logo.svg";
import "./TodoSign.css";

function TodoSign() {
  return (
    <div className="sign-container">
      <p>Aplicación web hecha por:</p>
      <img src={SignLogo} />
    </div>
  );
}

export { TodoSign };
