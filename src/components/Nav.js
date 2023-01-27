// import { signOut } from "firebase/auth";
import React from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
// import auth from "../../../../firebase.init";

const Nav = () => {
  return (
    <div className="navbar bg-primary mb-24 ">
      <div className="flex-1 text-white">
        <Link to="/" className="btn btn-ghost normal-case text-2xl">
          Rocket Launch
        </Link>
      </div>
      <div>
        <div className="navbar-center  lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" className="text-lg text-white">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
