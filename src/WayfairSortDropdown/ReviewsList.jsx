import React from "react";
import { ReviewsContext } from "./reviewProvider";
import { useContext } from "react";

const ReviewsList = () => {
  const { state } = useContext(ReviewsContext);

  return (
    <div>
      {state.reviews.map((review) => (
        <div
          key={review.id}
          style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}
        >
          <h3>{review.author}</h3>
          <p>{new Date(review.date).toLocaleDateString()}</p>
          <p>{review.rating} stars</p>
          <p>{review.content}</p>
          <p>Helpful: {review.helpfulVotes}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsList;
