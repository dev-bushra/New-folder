import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="w-full grid grid-cols-10 h-screen">
      <h1 className="sm:hidden col-span-2 bg-gray-400">SideNav</h1>
      <h1 className="sm:col-span-10 col-span-8 bg-gray-300">Home</h1>
    </div>
  );
};
export default Home;
