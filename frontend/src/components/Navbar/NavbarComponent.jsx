import React, { useState } from "react";
import "./Navbar.css";
import search_icon from "../../assets/search-w.png";

const NavbarComponent = () => {

  const [searchValue, setSearchValue] = useState("")

  return (
    <div className="navbar">
      <ul>
        <li>Employee Registration App</li>
      </ul>
      <div className="search_box">
        <input className="flex items-center my-7 bg-gray-200 outline-none h-16 w-full pl-6 pr-2 placeholder:text-slate-600 rounded-full"
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <img src={search_icon} alt="" />
      </div>
    </div>
  );
};

export default NavbarComponent;
