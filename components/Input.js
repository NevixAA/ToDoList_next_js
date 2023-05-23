const Input = () => (
  <form >
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

);

export default Input;
