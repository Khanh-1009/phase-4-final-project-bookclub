import React, {useContext} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../user";

function Header() {
  const {user, logout} = useContext(UserContext)
  const navigate = useNavigate()

  function handleLogoutClick(){
    fetch('/logout', {
      method: "DELETE",
      headers: {'Content-Type': 'application/json'}
    })
    .then(() => {
      navigate('/')
      logout()
    })
  }

  return (
    <header>
        <h1>Book Lovers Club</h1>
        <div className="navlink">
        <NavLink 
        to="/" 
        style={({isActive}) => { return {
          color: isActive ? "black" : "white",
          background: isActive? "white" : "rgb(22, 23, 23)"
        }}}
        className={({isActive}) => (isActive ? 'active' : 'link')}
        >
        Home
        </NavLink>
        {!user || user.error ? "" : <NavLink 
        to="/add-book" 
        style={({isActive}) => { return {
          color: isActive ? "black" : "white",
          background: isActive? "white" : "rgb(22, 23, 23)"
        }}}
        className={({isActive}) => (isActive ? 'active' : 'link')}
        >
        Add-Book
        </NavLink>}
        {!user || user.error ? (<NavLink
          to="/login" 
          style={({isActive}) => { return {
            color: isActive ? "black" : "white",
            background: isActive? "white" : "rgb(22, 23, 23)"
          }}}
          className={({isActive}) => (isActive ? 'active' : 'link')}
          >
          &#128100; Log In 
        </NavLink>) : (<NavLink>
          <button className="logout-btn" onClick={handleLogoutClick}>{user.username}, Log Out</button>
          </NavLink>)}
      </div>
    </header>
  );
}

export default Header;
