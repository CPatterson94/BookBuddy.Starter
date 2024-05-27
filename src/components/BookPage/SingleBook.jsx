import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/Cart";
import { useSelector } from "react-redux";

export default function SingleBook({ data, token }) {
  const dispatch = useDispatch();
  const handleAddToCart = (data) => {
    dispatch(addToCart(data));
  };
  const cart = useSelector((state) => state.cart.cartItems);
  return (
    <>
      <div className="card-pop" key={data.id}>
        <div className="container-pop">
          <img src={data.coverimage} alt={data.title} className="cover-pop" />
        </div>
        <h3 className="title-pop">{data.title}</h3>
        <h3 className="title-pop">By: {data.author}</h3>
        <h4 className="title-pop">Summary: {data.description}</h4>
        {token !== null && data.available !== false && !cart.includes(data) ? (
          <button
            className="single-button"
            onClick={() => handleAddToCart(data)}
          >
            Check Out Book
          </button>
        ) : cart.includes(data) ? (
          <h5 className="title-pop">Successfully checked out!</h5>
        ) : token === null ? (
          <h5 className="title-pop">
            You must be logged in to check out a book!
          </h5>
        ) : (
          <h5 className="title-pop">Book not available</h5>
        )}
        <Link to={"/books"} className="links-single-button">
          <button className="single-button">Back to Books</button>
        </Link>
      </div>
    </>
  );
}
