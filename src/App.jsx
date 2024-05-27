import { Route, Routes } from "react-router-dom";
import NavLoggedIn from "./components//Navigation/NavLoggedIn/NavIn";
import NavLoggedOut from "./components/Navigation/NavLoggedOut/NavOut";
import Home from "./components/Home";
import BooksList from "./components/BookPage/AllBooksList";
import SingleBookPage from "./components/BookPage/SingleBookPage";
import Account from "./components/MyAccount/Account";
import Register from "./components/Register";
import Login from "./components/Login";
import { useState } from "react";

import { useGetBooksQuery } from "./api/index";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const { isLoading } = useGetBooksQuery();
  return (
    <>
      {token !== null ? <NavLoggedIn /> : <NavLoggedOut />}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BooksList />} />
          <Route
            path={"/users/register"}
            element={<Register token={token} setToken={setToken} />}
          />
          <Route
            path={"/users/login"}
            element={<Login token={token} setToken={setToken} />}
          />
          <Route path="/books/:id" element={<SingleBookPage token={token} />} />
          <Route path="/users/me" element={<Account />} />
        </Routes>
      )}
    </>
  );
}

export default App;
