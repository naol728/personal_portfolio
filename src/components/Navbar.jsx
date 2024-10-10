import React from "react";

export default function Navbar(){
  return (<div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Naol M</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Skill</a></li>
          <li>
            <a > products</a>
      
          </li>
        </ul>
      </div>
    </div>)
 
}
