import React, { useState, useEffect } from "react";
import Input from "./Input";
import ToDoItem from "./ToDoItem";
import Button from "./Button";
import { Link } from "react-router-dom";

function ToDoListPage(  ) {
  const [todo, setTodo] = useState("");
  const [addTodo, setAddTodo] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setAddTodo(storedTodos);
  }, []);

  function handleAddTodo() {
    const now = new Date();
    const options = {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    const formattedDate = now.toLocaleDateString("en-US", options);
    const dateTime = `${formattedDate}`;

    if (todo !== "") {
      const newTodo = { text: todo, timestamp: dateTime };
      const newTodoList = [...addTodo, newTodo];
      setAddTodo(newTodoList);
      localStorage.setItem("todos", JSON.stringify(newTodoList));
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
    localStorage.setItem("todos", JSON.stringify(newTodoList));
  }

  return (
    <div className="max-w-lg py-5 px-8 m-auto h-screen rounded-xl bg-black text-white overflow-auto">
      <h1 className="text-3xl text-center pb-4 text-white font-bold ">TODO's LIST</h1>
      <Link to="/" className="flex justify-end py-2 hover:underline">
        Go back
      </Link>
      <div className="bg-gray-400 rounded-xl">
        <Input value={todo} onTodoChange={onTodoChange} />
        <Button handleAddTodo={handleAddTodo} />
      </div>
      <ToDoItem addTodo={addTodo} updatedTodoList={updatedAddTodo} />
    </div>
  );
}

export default ToDoListPage;
