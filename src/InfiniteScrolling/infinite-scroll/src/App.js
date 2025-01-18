import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const myThrottle = (cb, limit) => {
  let flag = true;
  return function () {
    let context = this,
      args = arguments;
    if (flag) {
      cb.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const InfiniteScrollComponent = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch data
  const fetchMorePosts = async () => {
    if (!hasMore || loading) return;
    setLoading(true);

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _page: page,
            _limit: 10,
          },
        }
      );

      const newPosts = response.data;
      if (newPosts.length < 10) setHasMore(false);
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to load posts. Please try again.");
    }

    setLoading(false);
  };

  // Fetch data when `page` changes
  useEffect(() => {
    fetchMorePosts();
  }, [page]);

  // Handle scroll with throttling
  const handleScroll = useCallback(
    myThrottle(() => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100 &&
        !loading
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    }, 200),
    [loading]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!hasMore && <p>No more posts to load</p>}
    </div>
  );
};

export default InfiniteScrollComponent;
