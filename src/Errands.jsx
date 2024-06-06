import React from "react";
import { Link } from "react-router-dom";

function Errands() {
  return (
    <Link to="/todolistpage">
      <div className="bg-cyan-400 rounded-2xl p-5">
        <h1 className="font-medium">#ERRANDS</h1>
        <span className="text-sm">1 items</span>
      </div>
    </Link>
  );
}

export default Errands;
