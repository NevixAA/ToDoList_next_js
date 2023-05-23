import Form from "./Form";
import ToDoList from "./ToDoList";

import { useState } from "react";

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="h-screen flex flex-col items-center bg-blue-200">
      <h1 className="text-5xl font-bold text-blue-500 ">Todo List</h1>
      <Form setTodos={setTodos} todos={todos} />
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default ToDo;
