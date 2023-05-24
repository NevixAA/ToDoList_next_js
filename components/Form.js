/** this library help with set uniqe Id's for each task that insert from the form section */
import { v4 as uuidv4 } from "uuid";
// import { useEffect } from "react";

/**
 * form component contain the inputs tags and handle the 'add task' functionallity
 *
 */
const Form = ({ setTodos, todos }) => {
  /**
   * handleSubmit function get's the form submit events and add task's to the todos array
   */

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskDescription = e.target.taskDescription.value;
    const taskInput = e.target.taskInput.value;
    if (!taskInput || !taskDescription) return;

    setTodos([
      ...todos,
      {
        id: uuidv4(),
        text: taskInput,
        taskDescription: taskDescription,
        done: false,
      },
  
    ]);
    e.target.taskInput.value = "";
    e.target.taskDescription.value = "";
  };
  // useEffect(() => {
  //  // Log the updated todos value
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  return (
    <form className="mt-10" onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-row  space-x-10">
        <label className="flex flex-col gap-1 font-bold text-blue-500">
          Task title
          <input
            type="text"
            name="taskInput"
            placeholder="Enter task's title"
            className="border border-gray-300 h-10 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </label>
        <label className="flex flex-col gap-1 font-bold text-blue-500">
          Task desc
          <input
            type="text"
            name="taskDescription"
            placeholder="Enter task's desc"
            className="border border-gray-300  h-10 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </label>
        <div className="flex flex-col flex-col-reverse">
          <button
            type="submit"
            className="bg-blue-500 text-white h-10 px-8 rounded-md hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
