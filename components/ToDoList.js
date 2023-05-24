/**
 * components TodoList  contains the task list functionallity events(delete,mark,drag&drop and edit)
 *
 */
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const ToDoList = ({ setTodos, todos }) => {
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
    // Ignore drop outside droppable container
    if (!droppedItem.destination) return;

    // Create a new array to hold the updated list
    const updatedList = [...todos];

    // Remove the dragged item from its original position
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);

    // Add the dropped item to the new position
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);

    // Update the state with the updated list
    setTodos(updatedList);
  };
  // Save todos array to localStorage whenever todos change

  return (
    <DragDropContext onDragEnd={handleDrop}>
      <Droppable droppableId="list-container">
        {(provided) => (
          <div
            id="list_item_div"
            className={
              !(todos.length === 0)
                ? "flex flex-col w-full p-4 border-b border-white-200 rounded-t-lg dark:border-gray-600"
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
                        ? "flex felx-row space-x-40 text-5xl w-full p-8 border-b border-gray-200 rounded-t-lg dark:border-gray-600"
                        : "flex felx-row space-x-40 text-5xl w-full p-8 border-b border-gray-200 rounded-t-lg dark:border-gray-600"
                    }
                  >
                    <span className={todo.done ? "line-through" : ""}>
                      {todo.text}-{todo.taskDescription}
                    </span>
                    <button
                      className="bg-blue-500 text-white rounded-md hover:bg-blue-600"
                      onClick={() => markTodo(todo.id)}
                    >
                      V
                    </button>
                    <button
                      className="bg-blue-500 text-white rounded-md hover:bg-blue-600 delete"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      Delete
                    </button>
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
