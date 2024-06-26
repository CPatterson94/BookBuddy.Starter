/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faIdCard } from "@fortawesome/free-solid-svg-icons";

// export default function Nav() {
//   const [token, setToken] = useState(localStorage.getItem("token"));

//   return (
//     <>
//       <nav className="nav">
//         <div className="link-container">
//           <Link to={"/"} className="links">
//             <h3>HOME</h3>
//           </Link>
//           <Link to={"/books"} className="links">
//             <h3>BOOKS</h3>
//           </Link>

//           {token !== null ? (
//             <>
//             <Link to={"/users/me"} className="links-log">
//             <FontAwesomeIcon
//               icon={faIdCard}
//               size={"3x"}
//               style={{ color: "#000000" }}
//             /></Link>
//             <Link to={"/"} className="links-log-button-link">
//               <button
//                 onClick={localStorage.removeItem("token")}
//                 className="links-log-button"
//               >
//                 Logout
//               </button>
//               </Link>
//               </>
//           ) : (
//             <Link to={"users/login"} className="UserButt">
//               <FontAwesomeIcon
//                 icon={faIdCard}
//                 size={"3x"}
//                 style={{ color: "#000000" }}
//               />
//               <h6>Sign In Here / Register</h6>
//             </Link>
//           )}
//         </div>
//       </nav>
//     </>
//   );
// }
