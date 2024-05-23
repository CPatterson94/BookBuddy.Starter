/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useGetBooksQuery } from "../../api/index";

export default function Books() {
  const { isLoading, data } = useGetBooksQuery();
  console.log(data);

  return (
    <>
      <div className={"BookLibrary"}>
        {isLoading
          ? "loading Books..."
          : data.Books.map((i, index) => (
              <div key={index} className={"book"}>
                <h2>{i.title}</h2>
                <img src={i.coverimage} alt={i.title} />
              </div>
            ))}
      </div>
    </>
  );
}
