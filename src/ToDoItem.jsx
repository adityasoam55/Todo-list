import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdEdit } from "react-icons/md"; // Importing edit icon

function ToDoItem({ addTodo, updatedTodoList }) {
  const [todoList, setTodoList] = useState(addTodo)
  const [editIndex, setEditIndex] = useState(-1);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    setTodoList(addTodo);
  }, [addTodo]);

  function handleRemove(index) {
    const newTodoList = [...addTodo];
    newTodoList.splice(index, 1);
    updatedTodoList(newTodoList);
    localStorage.setItem("todos", JSON.stringify(newTodoList));
  }

  function handleEdit(index, text) {
    setEditIndex(index);
    setEditText(text);
  }

  function handleEditChange(e) {
    setEditText(e.target.value);
  }

  function handleEditSave(index) {
    const newTodoList = [...addTodo];
    newTodoList[index].text = editText;
    updatedTodoList(newTodoList);
    localStorage.setItem("todos", JSON.stringify(newTodoList));
    setEditIndex(-1);
    setEditText("");
  }

  return (
    <div>
      {todoList.map((item, index) => (
        <div className="bg-gray-300 p-5 mt-3 rounded-xl font-bold" key={index}>
          <div className="flex items-center justify-between">
            {editIndex === index ? (
              <input
                type="text"
                value={editText}
                onChange={handleEditChange}
                className="w-full p-2 bg-gray-300 outline-none mx-2 rounded"
              />
            ) : (
              <p>{item.text}</p>
            )}
            <div className="flex items-center">
              {editIndex === index ? (
                <button
                  className="w-6 text-green-500 text-xl flex justify-center items-center"
                  onClick={() => handleEditSave(index)}
                >
                  Save
                </button>
              ) : (
                <>
                  <button
                    className="w-6 text-blue-500 text-2xl flex justify-center items-center pr-2"
                    onClick={() => handleEdit(index, item.text)}
                  >
                    <MdEdit />
                  </button>
                  <button
                    className="w-6 text-red-500 text-2xl flex justify-center items-center"
                    onClick={() => handleRemove(index)}
                  >
                    <RxCross2 />
                  </button>
                </>
              )}
            </div>
          </div>
          {item.timestamp && (
            <div className="flex gap-2">
              <span className="text-xs text-black font-medium">ADDED -</span>
              <p className="text-xs text-black font-medium">{item.timestamp}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ToDoItem;
