import React from "react";

const TodoItem = ({ children, handleCheck }) => (
  <label className="todo-item">
    <input 
    type="checkbox"  
    defaultChecked={children.checked}
    onChange={() => handleCheck(children)}
    />
    <span>{children.name}</span>
  </label>
)

export default TodoItem;