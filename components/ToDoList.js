import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
/**
 * component todoList contain the elements and funcionallity of the task list.
 *
 */
const ToDoList = ({ setTodos, todos }) => {
  const [editTask, setEditTask] = useState(null);
  const [editedTaskTitle, setEditedTaskTitle] = useState("");
  const [editedTaskDescription, setEditedTaskDescription] = useState("");

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

  const handleDrop = (droppedItem) => {
    if (!droppedItem.destination) return;

    const updatedList = [...todos];

    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);

    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);

    setTodos(updatedList);
  };

  const handleEdit = (id, taskTitle, taskDescription) => {
    setEditTask(id);
    setEditedTaskTitle(taskTitle);
    setEditedTaskDescription(taskDescription);
  };

  const handleSaveEdit = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            text: editedTaskTitle,
            taskDescription: editedTaskDescription,
          }
        : todo
    );
    setTodos(updatedTodos);
    setEditTask(null);
    setEditedTaskTitle("");
    setEditedTaskDescription("");
  };

  return (
    <DragDropContext onDragEnd={handleDrop}>
      <Droppable droppableId="list-container mt-8">
        {(provided) => (
          <div
            id="list_item_div"
            className={
              !(todos.length === 0)
                ? "flex flex-col w-full mt-8 p-4 gap-4 border border-blue-900 shadow-lg rounded-t-lg"
                : ""
            }
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {todos.map((todo, index) => (
              <Draggable key={todo.id} draggableId={todo.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={
                      todo.done
                        ? "flex felx-row  text-3xl w-full  border border-gray-200 rounded-full place-content-between"
                        : "flex felx-row  text-3xl w-full  border border-gray-200 rounded-full place-content-between"
                    }
                  >
                    {editTask === todo.id ? (
                      <div className="flex flex-row w-full justify-around items-center">
                        <input
                          type="text"
                          value={editedTaskTitle}
                          className="border border-gray-200 rounded-md h-full max-w-[200px] focus:outline-none focus:ring focus:border-blue-500"
                          onChange={(e) => setEditedTaskTitle(e.target.value)}
                        />
                        <input
                          type="text"
                          value={editedTaskDescription}
                          className="border border-gray-200 rounded-md h-full max-w-[200px] focus:outline-none focus:ring focus:border-blue-500"
                          onChange={(e) =>
                            setEditedTaskDescription(e.target.value)
                          }
                        />
                      </div>
                    ) : (
                      <div className={todo.done ? "line-through text-green-500 w-full flex justify-around" : "w-full flex justify-around"}>
                        <label className="text-start p-2 h-full max-w-[200px]">{todo.text}</label>

                        <label className="text-start p-2 h-full max-w-[200px]"> {todo.taskDescription}</label>
                      </div>
                    )}
                    <div className="flex flex-row ">
                      <button className="" onClick={() => markTodo(todo.id)}>
                        <img
                          src="../static/mark_logo.png"
                          alt="buttonpng"
                          className="w-8 h-8 rounded-full bg-slate-100"
                          width="512"
                          height="512"
                        />
                      </button>
                      <button className="" onClick={() => deleteTodo(todo.id)}>
                        <img
                          src="../static/delete_logo.jpg"
                          alt="buttonjpg"
                          className="w-8 h-8 rounded-full bg-slate-100"
                          width="512"
                          height="512"
                        />
                      </button>
                      {editTask === todo.id ? (
                        <button
                          className=""
                          onClick={() => handleSaveEdit(todo.id)}
                        >
                          <img
                            src="../static/save_logo.jpg"
                            alt="buttonjpg"
                            className="w-8 h-8 rounded-full bg-slate-100"
                            width="512"
                            height="512"
                          />
                        </button>
                      ) : (
                        <button
                          className=""
                          onClick={() =>
                            handleEdit(todo.id, todo.text, todo.taskDescription)
                          }
                        >
                          <img
                            src="../static/edit_logo.png"
                            alt="buttonpng"
                            className="w-8 h-8 rounded-full bg-slate-100"
                            width="512"
                            height="512"
                          />
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ToDoList;
