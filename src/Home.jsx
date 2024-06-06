import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Link to="/todolistpage">
      <div className="bg-yellow-400 rounded-2xl p-5">
        <h1 className="font-medium ">#HOME</h1>
      </div>
    </Link>
  );
}

export default Home;

