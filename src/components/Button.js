import React from "react";

const Button = ({ handleClick }) => (
  <button className="button" onClick={handleClick}>
    Показать количество выполненных задач
  </button>
)

export default Button;