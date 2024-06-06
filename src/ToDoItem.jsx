import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

function ToDoItem({ addTodo, updatedTodoList, dateTime }) {
  const [todoList, setTodoList] = useState(addTodo);

  useEffect(
    function () {
      setTodoList(todoList);
    },
    [addTodo],
  );

  function handleRemove(index) {
    const newTodoList = [...addTodo];
    newTodoList.splice(index, 1);
    updatedTodoList(newTodoList);
  }

  return (
    <div>
      {addTodo.map(function (value, index) {
        return (
          <div
            className="bg-gray-300 p-5 mt-3 rounded-xl font-bold"
            key={index}
          >
            <div className="flex items-center justify-between">
              <p>{value}</p>
              <button
                className="w-6 text-red-500 text-2xl flex justify-center items-center"
                onClick={() => {
                  handleRemove(index);
                }}
              >
                <RxCross2 />
              </button>
            </div>
            {dateTime && (
                <div>
                    <span className="text-xs text-black font-medium">ADDED</span>
              <p className="text-xs text-black font-medium">{dateTime}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ToDoItem;
