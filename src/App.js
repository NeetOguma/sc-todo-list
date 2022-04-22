import { useState } from "react";
import "./styles.css";
import React from "react";

export default function App() {
  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  //Todoを作った際に追跡する用
  const [todos, setTodos] = useState([]);
  //Inputに記入された時用
  const [todo, setTodo] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim()
        }
      ]);
    }
    setTodo("");
  }

  return (
    <>
      <div className="App">
        <form onSubmit={handleFormSubmit}>
          <input
            name="todo"
            type="text"
            value={todo}
            placeholder="Create a new Todo!!"
            onChange={handleInputChange}
          />
        </form>

        <li>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </li>
      </div>
    </>
  );
}
