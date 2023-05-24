import Form from "./Form";
import ToDoList from "./ToDoList";
import { useState, useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

  // if (typeof window !== "undefined") {
  //   const storedTodos = localStorage.getItem("todos");
  //   return storedTodos ? JSON.parse(storedTodos) : [];
  // }

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     localStorage.setItem("todos", JSON.stringify(todos));
  //   }
  // }, [todos]);

  return (
    <div className="h-screen flex flex-col items-center bg-blue-200">
      <h1 className="text-5xl font-bold text-blue-500 ">Todo List</h1>
      <Form setTodos={setTodos} todos={todos} />
      <ToDoList setTodos={setTodos} todos={todos} />
    </div>
  );
};

export default App;
