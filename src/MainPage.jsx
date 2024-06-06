import React from "react";
import Home from "./Home";
import Work from "./Work";
import Errands from "./Errands";
import HomeImprovement from "./HomeImprovement";

function MainPage() {
  return (
    <div className="max-w-lg m-auto h-screen rounded-xl bg-lime-600 py-10 px-8">
      <div className="">
        <h1 className="text-white text-2xl font-bold">TAGS</h1>
        <p className="text-white font-thin">SELECT TAGS TO FOCUS</p>
      </div>
      <div className="flex flex-col gap-4 h-full justify-center">
        <Home />
        <Work />
        <Errands />
        <HomeImprovement />
      </div>
    </div>
  );
}

export default MainPage;
