import "./App.css";
import { useState, useRef, useEffect } from "react";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const inputForm = useRef();

  function addTodo() {
    window.addEventListener("keyup", (event) => {
      if (event.key !== "Enter" || inputForm.current.value === "") return;

      setTodos((currentTodos) => {
        return [
          ...currentTodos,
          { text: inputForm.current.value, id: Math.random(), checked: false },
        ];
      });
    });
  }

  function toggleComplete(todo) {
    const checkedIndex = todos.indexOf(todo);
    const newList = [...todos];
    newList[checkedIndex].checked = !newList[checkedIndex].checked;
    setTodos(newList);
  }

  function deleteTodo(event, todo) {
    event.preventDefault();

    const checkedIndex = todos.indexOf(todo);
    const newList = [...todos];
    newList.splice(checkedIndex, 1);
    setTodos(newList);
  }

  useEffect(() => {
    addTodo();
    setTodos(JSON.parse(localStorage.getItem("todos")) || []);
  }, []);

  useEffect(() => {
    inputForm.current.value = "";
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <div className="title">todo list</div>
      <input ref={inputForm} className="input" type="text" />
      <p className="description">
        left click to toggle complete
        <br />
        right click to delete
      </p>
      <div className="todos">
        {todos.map((e) => (
          <Todo
            key={e.id}
            todo={e}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
