const Form = ({setTodos,todos}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const taskDescription = e.target.taskDescription.value;
    const taskInput = e.target.taskInput.value;
    if (!taskInput && !taskDescription) return;
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: taskInput,
        taskDescription: taskDescription,
        done: false,
      },
    ]);
  };
  return (
    <form className="mt-10" onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-row  space-x-10">
        <label className="flex flex-col gap-1 font-bold text-blue-500">
          Task title
          <input
            type="text"
            name="taskInput"
            placeholder="Enter task's title"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </label>
        <label className="flex flex-col gap-1 font-bold text-blue-500">
          Task desc
          <input
            type="text"
            name="taskDescription"
            placeholder="Enter task's desc"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-8 rounded-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
