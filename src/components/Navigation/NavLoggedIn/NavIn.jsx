/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
export default function NavLoggedIn() {
  return (
    <>
      <nav>
        <div className="link-container">
          <Link to={"/"} className="linksH">
            <h3>Home</h3>
          </Link>
          <Link to={"/books"} className="linksB">
            <h3>Books</h3>
          </Link>

          <Link to={"/users/me"} className="links-loggedin">
            <FontAwesomeIcon
              icon={faIdCard}
              size={"3x"}
              style={{ color: "#000000" }}
            />
            <h6>Account Info</h6>
          </Link>
          <Link to={"/"} className="links-logout">
            <button
              onClick={localStorage.removeItem("token")}
              className="links-logout-button"
            >
              Logout
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
