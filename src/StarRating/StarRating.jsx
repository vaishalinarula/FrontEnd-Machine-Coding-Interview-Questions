import { useState } from "react";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0); // Stores the current rating
  const [hover, setHover] = useState(0); // Stores the current hovered star index

  const handleStarClick = (index) => {
    setRating(index + 1); // Set the rating
  };

  return (
    <div>
      <h2>Star Rating</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        {[...Array(totalStars)].map((star, index) => {
          return (
            <Star
              key={index}
              filled={index < (hover || rating)} // Fill based on hover or actual rating
              onClick={() => handleStarClick(index)} // Handle star click
              onMouseEnter={() => setHover(index + 1)} // Update hover state on mouse enter
              onMouseLeave={() => setHover(0)} // Reset hover state on mouse leave
            />
          );
        })}
      </div>
      <p>{`Rating: ${rating} / ${totalStars}`}</p>
    </div>
  );
};

const Star = ({ filled, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <span
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ cursor: "pointer", fontSize: "24px" }}
    >
      {filled ? "★" : "☆"}
    </span>
  );
};

export default StarRating;
