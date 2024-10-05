import { React, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { addSearch } from "../../store/slices/searchSlice";
import { useDispatch } from "react-redux";

export default function Search() {
  const [searchItems, setSearchItems] = useState();
  const dispatch = useDispatch();

  function searchs() {
    if (searchItems) {
      dispatch(addSearch(searchItems));
      setSearchItems("");
    }
  }
  // function liveData(e) {
  //   setSearchItems(e.target.value);
  //   dispatch(addSearch(searchItems));
  // }
  return (
    <>
      <input
        type="text"
        placeholder="search"
        className="search"
        value={searchItems}
        onChange={(e) => setSearchItems(e.target.value)}
        // onChange={(e) => liveData(e)}
      ></input>
      <span>
        <FiSearch onClick={searchs} />
      </span>
    </>
  );
}
