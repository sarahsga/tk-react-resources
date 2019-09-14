import React from "react";
import "./NavBar.css";

// component is simply a function definition that returns JSX
function NavBar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a>Why Github?</a>
          </li>
          <li>
            <a>Enterprise</a>
          </li>
          <li>
            <a>Explore</a>
          </li>
          <li>
            <a>Marketplace</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
        </ul>
      </nav>
      <div>
        <input type="search" placeholder="Search GitHub" />
        <button className="signIn">Sign in</button>
        <button className="signUp">Sign up</button>
      </div>
    </header>
  )
}

export default NavBar;
