import React from 'react'
import './home.css';

function Home() {
  const codeString = `
  import React from 'react';
  import './navbar.css';
  import { NavLink } from 'react-router-dom';
  
  function Navbar() {
    return (
      <nav className='navbar'>
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>navbar</NavLink>
        <NavLink to="/positions" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>positions</NavLink>
        <NavLink to="/flex" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>flex</NavLink>
        <NavLink to="/grid" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>grid</NavLink>
        <NavLink to="/pseudo" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>pseudo</NavLink>
        <NavLink to="/gradient" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>gradient</NavLink>
        <NavLink to="/transitions" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>transitions</NavLink>
      </nav>
    );
  }
  
  export default Navbar;
    `;

    const styleString = `
   .navbar {
    background: linear-gradient(to right, yellow, pink);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.5em;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.nav-link {
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-weight: 900;
    color: inherit; /* This ensures the links inherit the text color */
    text-shadow: 
        1px 1px 0 #fff, 
        -1px -1px 0 #fff, 
        -1px 1px 0 #fff, 
        1px -1px 0 #fff,
        1px 0 0 #fff, 
        -1px 0 0 #fff, 
        0 1px 0 #fff, 
        0 -1px 0 #fff;
    padding: 0.5em 1em;
    transition: color 0.3s ease, transform 0.3s ease;
}

.nav-link:hover {
    color: red;
    transform: scale(1.1);
}

.active-link {
    border-bottom: 2px solid red;
    color: red;
}

    `
  return (
    <div className='container'>
        <div className="code">
        <pre><code>{codeString}</code></pre>


        </div>
        <div className="style">
        <pre>
        <pre><code>{styleString}</code></pre>
        </pre>

        </div>

    </div>
  )
}

export default Home