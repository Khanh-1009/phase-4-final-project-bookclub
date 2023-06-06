import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline",
  width: "80px",
  padding: "10px 20px 10px 15px",
  margin: "40px 6px 6px",
  background: "rgb(43, 45, 45)",
  textDecoration: "none",
  color: "white",
};

function Header() {
  return (
    <header>
        <h1>Book Lovers Club</h1>
        <nav className="navlink">
        <NavLink 
      to="/" 
      exact 
      style={linkStyles}
      activeStyle={{
        background: "white",
        color: "black"
      }}
      >
        Home
      </NavLink>
      <NavLink 
      to="/add-book" 
      exact 
      style={linkStyles}
      activeStyle={{
        background: "white",
        color: "black"
      }}
      >
        Add-Book
      </NavLink>
      <NavLink 
      to="/login" 
      exact 
      style={linkStyles}
      activeStyle={{
        background: "white",
        color: "black"
      }}
      >
        &#128100; Log In
      </NavLink>
      </nav>
    </header>
  );
}

export default Header;
