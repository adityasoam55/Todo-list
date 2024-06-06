import React from "react";

const Button = React.memo(({ handleAddTodo }) => {
  return (
    <div className="rounded-b-xl p-5 flex justify-center">
      <button
        className="rounded-lg bg-sky-500 px-2 py-1"
        onClick={handleAddTodo}
      >
        ADD TODO's
      </button>
    </div>
  );
});

export default Button;
