import React from "react";
import { Link } from "react-router-dom";

function HomeImprovement() {
  return (
    <Link to="/todolistpage">
      <div className="bg-pink-400 rounded-2xl p-5">
        <h1 className="font-medium ">#HOME-IMPROVEMENT</h1>
        <span className="text-sm">1 items</span>
      </div>
    </Link>
  );
}

export default HomeImprovement;
