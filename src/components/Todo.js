import React from "react";

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div
      className="todo"
      onClick={(event) => toggleComplete(todo)}
      onContextMenu={(event) => deleteTodo(event, todo)}
    >
      <p className={todo.checked ? "checked" : ""}>{todo.text}</p>
    </div>
  );
};

export default Todo;
