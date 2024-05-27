function Books({ data }) {
  return (
    <>
      <div className="allBooksCard" key={data.id}>
        <div className="allBooksContainer">
          <img src={data.coverimage} alt={data.title} className="art" />
        </div>
        <h3 className="titles">{data.title}</h3>
        <h3 className="authers">Written By: {data.author}</h3>
      </div>
    </>
  );
}
export default Books;
