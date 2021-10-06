import React from "react";
import { Link } from "react-router-dom";



const NavBar = ({title}) => {
  return (
    <nav className="navbar bg-primary">
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to='/widgets'>Widgets</Link>
        </li>
        <li>
          <Link to='/props'>Props</Link>
        </li>
        <li>
          <Link to='/input'>Input</Link>
        </li>
        <li>
          <Link to="/hooks">InputHooks</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/axios">Axios</Link>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </ul>
    </nav>
  )
}

NavBar.defaultProps = {
  title: `Amit's Store`
}

export default NavBar;