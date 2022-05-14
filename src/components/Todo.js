import React from "react";

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div
      className="todo"
      onClick={(event) => toggleComplete(todo)}
      onContextMenu={(event) => deleteTodo(event, todo)}
    >
      {todo.checked && <>🔹</>}
      {todo.text}
    </div>
  );
};

export default Todo;
