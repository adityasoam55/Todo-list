import React from "react";
import { Link } from "react-router-dom";

function Work() {
  return (
    <Link to="/todoListPage">
      <div className="bg-red-400 rounded-2xl p-5">
        <h1 className="font-medium ">#WORK</h1>
        <span className="text-sm">1 items</span>
      </div>
    </Link>
  );
}

export default Work;
