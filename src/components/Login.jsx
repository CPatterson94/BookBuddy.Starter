/* TODO - add your code to create a functional React component that renders a login form */
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ token, setToken }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  async function submit(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      const result = await response.json();
      localStorage.setItem("token", result.token);
      setToken(result.token);
      setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <div className="public">
        {error && <p>{error}</p>}
        {successMessage !== null ? (
          <>
            <h2>{successMessage}</h2>
            <Link to="/books" className="reg-log-link">
              Check out our books!
            </Link>
          </>
        ) : (
          <>
            <h2>Sign In: </h2>
            <form className="register" onSubmit={submit}>
              <label>Email: </label>
              <input
                type="text"
                placeholder="Enter email"
                className="form-input"
                name={"email"}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Password: </label>
              <input
                type="password"
                placeholder="Password"
                className="form-input"
                name={"password"}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="form-submit-button">
                Submit
              </button>
              <p>Don't have an account? </p>
              <Link to="/users/register" className="reg-log-link">
                Register Here!
              </Link>
            </form>
          </>
        )}
      </div>
    </>
  );
};
export default Login;
