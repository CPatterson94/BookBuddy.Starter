// import { useState } from "react";
// import Title from "./Book.Title";

// function Book({ data }) {
//   const [modal, setModal] = useState(false);
//   const [toggle, setToggle] = useState(false);

//   return (
//     <>
//       <div
//         className={"book block"}
//         key={data.id}
//         onClick={() => setModal(true)}
//       >
//         <Title />
//         <h3>{data.id}</h3>
//       </div>
//       <div
//         className="modal"
//         style={{ display: modal ? "flex" : "none" }}
//         onClick={() => setModal(false)}
//       >
//         <div onClick={() => setToggle(!toggle)} />
//         <h1>One book here</h1>
//       </div>
//     </>
//   );
// }
// export default Book;
