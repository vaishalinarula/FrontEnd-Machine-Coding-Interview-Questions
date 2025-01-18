// import React, { useState, useEffect, useCallback } from "react";

// function SearchBar() {
//   const [query, setQuery] = useState("");
//   const [allResults, setAllResults] = useState([]);
//   const [filteredResults, setFilteredResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const fetchResults = async (searchQuery) => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(
//         `https://dummyjson.com/products/search?q=${searchQuery}`
//       );
//       const data = await response.json();
//       setAllResults(data.products || []);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setAllResults([]);
//     }
//     setIsLoading(false);
//   };

//   // Debounced version of fetchResults with 300ms delay
//   const debouncedFetchResults = useCallback(debounce(fetchResults, 300), []);

//   // Trigger API call if query is more than 3 characters
//   useEffect(() => {
//     if (query.length > 3) {
//       debouncedFetchResults(query);
//     } else {
//       setFilteredResults([]);
//     }
//   }, [query, debouncedFetchResults]);

//   // Filter products by title after fetching data
//   useEffect(() => {
//     if (query.length > 3) {
//       const filtered = allResults.filter((product) =>
//         product.title.toLowerCase().includes(query.toLowerCase())
//       );
//       setFilteredResults(filtered);
//     }
//   }, [allResults, query]);

//   return (
//     <div>
//       <h2>Debounced Search</h2>
//       <input
//         type="text"
//         placeholder="Search for a product..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       {isLoading && <p>Loading...</p>}
//       <ul>
//         {filteredResults.map((product) => (
//           <li key={product.id}>{product.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SearchBar;

import React, { useState, useEffect, useCallback } from "react";

export function debounce(func, delay) {
  let timer;
  return function (...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(context, args), delay);
  };
}

function SearchBar() {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchResults = async (searchQuery) => {
    setIsLoading(true);
    setError(""); // Clear any previous errors
    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${searchQuery}`
      );
      const data = await response.json();
      setFilteredResults(
        data.products?.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        ) || []
      );
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch results. Please try again.");
    }
    setIsLoading(false);
  };

  const debouncedFetchResults = useCallback(debounce(fetchResults, 300), []);

  useEffect(() => {
    if (query.length > 3) {
      debouncedFetchResults(query);
    } else {
      setFilteredResults([]);
    }
  }, [query, debouncedFetchResults]);

  return (
    <div className="search-bar">
      <label htmlFor="search-input">Debounced Search Bar:</label>
      <input
        id="search-input"
        type="text"
        placeholder="Search for a product..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search products"
      />
      {isLoading && <p role="status">Loading...</p>}
      {error && <p className="error">{error}</p>}
      <ul>
        {filteredResults.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
