import { useState } from "react";
import "./styles.css";
import React from "react";

export default function App() {
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
        <form>
          <input name="todo" type="text" placeholder="Create a new Todo!!" />
        </form>

        <li>
          {todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </li>
      </div>
      <p>{todo}</p>
    </>
  );
}
