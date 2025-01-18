import React from "react";
import { ReviewsContext } from "./reviewProvider";
import { useContext } from "react";

const SortDropdown = () => {
  const { dispatch } = useContext(ReviewsContext);

  const handleSortChange = (e) => {
    dispatch({ type: "SORT_REVIEWS", payload: e.target.value });
  };

  return (
    <div className="App">
      <h2>Reviews</h2>
      <label>Sort By: </label>
      <select onChange={handleSortChange}>
        <option value="Most Relevant">Most Relevant</option>
        <option value="Latest">Latest</option>
        <option value="Most Helpful">Most Helpful</option>
        <option value="Highest Rating">Highest Rating</option>
        <option value="Lowest Rating">Lowest Rating</option>
      </select>
    </div>
  );
};

export default SortDropdown;
