/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../slices/Cart";

export default function Account() {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const handleRemove = (i) => {
    dispatch(removeFromCart(i));
  };
  return (
    <>
      <h1 id="accPg">My Account</h1>
      <p id={"accPg2"}>Account Info</p>
      <div className="accBox">
        <h4 className="boxTitles">Checked Out books:</h4>
        {cart.length === 0 ? (
          <div className="noCont">
            <h4 className="noBooks">
              No Books Checked Out...Let's Change that!
            </h4>
          </div>
        ) : (
          cart.map((i) => (
            <ul key={i.id}>
              <li className="list">Title: {i.title}</li>
              <li className="list">Author: {i.author}</li>
              <li className="list">Book ID: {i.id}</li>
              <button onClick={() => handleRemove(i)} className="return-butt">
                Return Book
              </button>
            </ul>
          ))
        )}
      </div>
    </>
  );
}
