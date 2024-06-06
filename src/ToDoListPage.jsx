import React, { useState } from "react";
import Input from "./Input";
import ToDoItem from "./ToDoItem";
import Button from "./Button";
import { Link } from "react-router-dom";

function ToDoListPage() {
  const [todo, setTodo] = useState("");
  const [addTodo, setAddTodo] = useState([]);
  const [dateTime, setDateTime] = useState(null);

  function handleAddTodo() {
    const now = new Date();
    const options = {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    const formattedDate = now.toLocaleDateString("en-US", options);
    const time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    setDateTime(`${formattedDate}`);

    if (todo != "") {
      setAddTodo([...addTodo, todo]);
      setTodo("");
    } else {
      alert("Please enter a todo");
    }
  }

  function onTodoChange(e) {
    setTodo(e.target.value);
  }

  function updatedAddTodo(newTodoList) {
    setAddTodo(newTodoList);
  }
  return (
    <div className="max-w-lg  py-5 px-8 m-auto h-screen rounded-xl bg-black text-white">
      <h1 className="text-3xl text-center pb-4 text-white ">HOME TODO's</h1>
      <Link to="/" className="flex justify-end py-2 hover:underline">Go back</Link>
      <div className="bg-gray-400 rounded-xl">
        <Input value={todo} onTodoChange={onTodoChange} />
        <Button handleAddTodo={handleAddTodo} />
      </div>
      <ToDoItem
        addTodo={addTodo}
        updatedTodoList={updatedAddTodo}
        dateTime={dateTime}
      />
    </div>
  );
}

export default ToDoListPage;
