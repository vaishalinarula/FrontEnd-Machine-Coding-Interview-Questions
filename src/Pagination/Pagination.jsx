import React, { useState, useEffect } from "react";
import "./Pagination.css";

function Pagination() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products?limit=100`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const responseData = await response.json();

        const totalItems = responseData.products.length;
        const itemsPerPage = 10;
        const totalPagesCalculated = Math.ceil(totalItems / itemsPerPage);
        const startingIndex = (currentPage - 1) * itemsPerPage;
        const paginatedProducts = responseData.products.slice(
          startingIndex,
          startingIndex + itemsPerPage
        );

        setProducts(paginatedProducts);
        setTotalPages(totalPagesCalculated);
        setLoading(false);
        setError(null);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? 1 : prevPage - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === totalPages ? totalPages : prevPage + 1
    );
  };

  return (
    <div className="main-content">
      <h1>Product List - Pagination</h1>
      {error && <p>{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
          <div className="pagination" style={{ display: "flex", gap: "15px" }}>
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pagination;
