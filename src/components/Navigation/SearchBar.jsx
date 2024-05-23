import { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../../slices/BookSlice";

function SearchBar() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const setResults = (e) => {
    setValue(e.target.value);
    dispatch(search(value));
  };

  return <input onChange={setResults} placeholder={"Search for a Book..."} />;
}

export default SearchBar;
