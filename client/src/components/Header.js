import React from "react";
import { NavLink } from "react-router-dom";



function Header() {
  return (
    <header>
        <h1>Book Lovers Club</h1>
        <nav>
        <NavLink 
      to="/" 
      exact 
      // style={linkStyles}
      activeStyle={{
        background: "#558707",
      }}
      >
        Home
      </NavLink>
      <NavLink 
      to="/add-book" 
      exact 
      // style={linkStyles}
      activeStyle={{
        background: "#558707",
      }}
      >
        Add Book
      </NavLink>
      <NavLink 
      to="/login" 
      exact 
      // style={linkStyles}
      activeStyle={{
        background: "#558707",
      }}
      >
        Log In
      </NavLink>
      </nav>
    </header>
  );
}

export default Header;
