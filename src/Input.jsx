import React from "react";

function Input({ value, onTodoChange, className }) {
  return (
    <div className="bg-gray-400 rounded-xl">
      <input
        className="w-full bg-gray-300 text-white rounded-t-xl p-4 outline-none border-b border-b-gray-400"
        type="text"
        placeholder="Enter a Task..."
        value={value}
        onChange={onTodoChange}
      />
    </div>
  );
}

export default Input;
