import Input from "./Input";
import { useState } from "react";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!input) return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const markTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  return (
    <div className="flex flex-col items-center bg-blue-200">
      <h1 className="text-5xl font-bold text-blue-500 ">Todo List</h1>
      <form onSubmit={addTodo}>
        <div className="flex flex-row  space-x-10">
          <div className="flex flex-col ">
            <label htmlFor="title_input" className="font-bold text-blue-500">
              Task title
            </label>
            <input
              id="title_input"
              type="text"
              placeholder="Enter task's title"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="desc_input" className="font-bold text-blue-500">
              Task desc
            </label>
            <input
              id="desc_input"
              type="text"
              placeholder="Enter task's desc"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <button className="bg-blue-500 text-white px-8 rounded-md hover:bg-blue-600">
            Add
          </button>
        </div>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.done ? "done" : ""}`}>
            <span onClick={() => markTodo(todo.id)}>{todo.text}</span>
            <button className="delete" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
