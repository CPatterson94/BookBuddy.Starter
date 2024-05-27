import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Books from "./AllBooks";
import { useState } from "react";

const AllBooksList = () => {
  const books = useSelector((state) => state.book.books);
  const [value, setValue] = useState("");

  return (
    <>
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search for a book..."
          onChange={(e) => setValue(e.target.value)}
          className="search"
        />
      </div>
      <div className="block">
        {books.length < 1 ? (
          <h1>No available books...</h1>
        ) : (
          books
            .filter(
              (i) =>
                i.title.toLowerCase().includes(value.toLowerCase()) ||
                i.author.toLowerCase().includes(value.toLowerCase()) ||
                i.description.toLowerCase().includes(value.toLowerCase())
            )
            .map((i) => (
              <Link to={"/books/" + i.id} key={i.id} className="title">
                <Books key={i.id} data={i} />
              </Link>
            ))
        )}
      </div>
    </>
  );
};
export default AllBooksList;
