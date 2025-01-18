import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setData(result.results);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
};

export default useFetch;
