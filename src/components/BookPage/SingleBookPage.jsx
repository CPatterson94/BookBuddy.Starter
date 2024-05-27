import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetBookQuery } from "../../api";
import SingleBook from "./SingleBook";

function SingleBookPage({ token }) {
  const bookGet = useSelector((state) => state.book.books);
  const params = useParams();
  const id = params.id;
  const { isLoading, data } = useGetBookQuery(id);
  return (
    <div key={bookGet.id}>
      {isLoading ? (
        <h1 className="load">Loading...</h1>
      ) : (
        <>
          <SingleBook data={data.book} token={token} />
        </>
      )}
    </div>
  );
}
export default SingleBookPage;
