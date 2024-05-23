// import { useState } from "react";
import { useGetBooksQuery } from "./api";
// import { Route, Routes } from "react-router-dom";
import bookLogo from "./assets/books.png";
import Nav from "./components/Navigation/Nav";
import Books from "./components/BookPage/Books";

function App() {
  // const [token, setToken] = useState(null);
  const books = useGetBooksQuery();
  console.log(books);

  return (
    <>
      <Nav />
      {/* {isLoading ? (
        <h1>IsLoading</h1>
      ) : (
        <Routes>
          <Route index element={<Books />} />
          <Route path={"/books/:id"} element={<BooksPage />} />
          <Route path={"addPlayer"} element={< />} />
        </Routes>
      )} */}

      <Books />
      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>
    </>
  );
}

export default App;
