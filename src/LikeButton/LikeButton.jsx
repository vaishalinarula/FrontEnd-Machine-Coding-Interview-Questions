import React, { useState } from "react";
import Button from "./Button/Button";

const LikeButton = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [liked, setLiked] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://www.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: liked ? "unlike" : "like",
          }),
        }
      );

      if (response.status === 200) {
        setLiked(!liked);
      } else {
        const res = await response.json();
        setError(res.message);
        return;
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        liked={liked}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default LikeButton;
