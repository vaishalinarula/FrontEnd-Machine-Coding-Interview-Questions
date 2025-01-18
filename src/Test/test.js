import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import cities from "./cities";

const debounce = (fn, delay) => {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const Test = () => {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [dropDownData, setDropDownData] = useState([]);
  const renders = useRef(0);

  // console.log("cities", cities);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const filterCities = () => {
    const filteredArray = cities.filter((city) => {
      return city.toLowerCase().includes(search);
    });

    setDropDownData(filteredArray);
  };

  useEffect(() => {
    debouncedFunction();
  }, [search]);

  const debouncedFunction = debounce(filterCities, 1000);

  useEffect(() => {
    console.log("renders");
    renders.current = renders.current + 1;
  });
  useEffect(() => {
    for (let i = 1; i < 1000; i++) {
      handleIncrement();
    }
  }, []);

  return (
    <div>
      <h2>Number of renders</h2>
      <h2>Counter : {count}</h2>
      <h2>renders : {renders.current}</h2>
      <button onClick={handleIncrement}>Increment</button>
      {/* <input
        type="text"
        placeholder="Search bar"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {search.length > 0 &&
        dropDownData.map((value, index) => {
          return <div>{value}</div>;
        })} */}
    </div>
  );
};

export default Test;
