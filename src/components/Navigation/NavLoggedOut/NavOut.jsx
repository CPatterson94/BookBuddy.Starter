import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";

export default function NavLoggedOut() {
  return (
    <>
      <nav>
        <div className="link-container">
          <Link to={"/"} className="linksH">
            <h3>Home</h3>
          </Link>
          <Link to={"books"} className="linksB">
            <h3>Books</h3>
          </Link>
          <Link to={"users/login"} className="UserButt">
            <FontAwesomeIcon
              icon={faIdCard}
              size={"3x"}
              style={{ color: "#000000" }}
            />
            <h6>Sign In Here / Register</h6>
          </Link>
        </div>
      </nav>
    </>
  );
}
