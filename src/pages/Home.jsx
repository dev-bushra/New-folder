import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="w-full flex flex-col gap-10 mt-10 items-center justify-center">
      <h1 className="mt-5 mx-auto">ASG</h1>
      <a
        href="/entriesemployees"
        className="bg-red-500 text-white-A700 px-9 py-3 rounded-lg"
      >
        Get Started
      </a>
    </div>
  );
};
export default Home;
