import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../user";

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
  const {user, logout} = useContext(UserContext)

  function handleLogoutClick(){
    fetch('/logout', {method: "DELETE"}).then((res) => {
      if (res.ok){
        logout()
      }
    })
  }

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
      {user ? ( 
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
    </NavLink>) : (
      <NavLink onClick={handleLogoutClick}
      to="/logout" 
      exact 
      style={linkStyles}
      activeStyle={{
        background: "white",
        color: "black"
      }}
      >
      Log Out
      </NavLink>
      )}
      </nav>
    </header>
  );
}

export default Header;



