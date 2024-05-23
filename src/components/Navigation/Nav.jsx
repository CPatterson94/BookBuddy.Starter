/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";

function Nav() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {/* <div className={"mobile_menu"} style={{ left: toggle ? "0" : "-100%" }}>
        <Link to={"/"} onClick={() => setToggle(!toggle)}>
          Home
        </Link>
        <Link to={"/users/login"} onClick={() => setToggle(!toggle)}>
          Login
        </Link>
        <Link to={"/users/me"} onClick={() => setToggle(!toggle)}>
          My Account
        </Link>
        <Link to={"/users/register"} onClick={() => setToggle(!toggle)}>
          Register New Account
        </Link>
      </div> */}
      <nav>
        <div className="nav-container">
          <div className={"menu_toggle"} onClick={() => setToggle(!toggle)}>
            <FontAwesomeIcon icon={faBars} size={"2x"} />
          </div>
          <SearchBar />
          <div className="NavLinks">
            <Link to={"/books"}>Home</Link>
            <Link to={"/users/login"}>Login</Link>
            <Link to={"/users/register"}>Register New Account</Link>
          </div>
          <div className="acctInfo">
            <Link to={"/users/me"}>
              <FontAwesomeIcon
                icon={faIdCard}
                size={"2x"}
                style={{ color: "#000000" }}
              />
            </Link>{" "}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
