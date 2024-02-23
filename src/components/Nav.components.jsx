import React from "react";
import { Link } from "react-router-dom";

const NavComponents = () => {
  return (
    <nav className="flex justify-between">
      <div className="border bg-slate-400 rounded-xl p-2 px-4 gap-x-4 inline-flex "> 
        <Link to="/">
          <p className="underline">Menu</p>
        </Link>
        <Link to="/product">
          <p className="underline">All Products</p>
        </Link>

        <Link to="/form">
          <p className="underline">Form</p>
        </Link>

      </div>
    </nav>
  );
};

export default NavComponents;
