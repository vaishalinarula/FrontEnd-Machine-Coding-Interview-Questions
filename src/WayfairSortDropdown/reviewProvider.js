import React, { createContext, useReducer } from "react";
import { reviewsReducer } from "./reviewsReducer";

const initialState = {
  reviews: [
    {
      id: 1,
      author: "J. Doe",
      date: "08/04/2022",
      rating: 5,
      content:
        "The chair, as others have said isn’t a “sink into” style chair but it IS comfortable...",
      helpfulVotes: 4,
    },
    {
      id: 2,
      author: "Edith Lebsack",
      date: "11/26/2021",
      rating: 5,
      content:
        "Honestly surprised at the quality. This is a super cozy chair for curling up with a book.",
      helpfulVotes: 11,
    },
    {
      id: 3,
      author: "Rita MacGyver PhD",
      date: "10/26/2021",
      rating: 4,
      content:
        "Awesome color. These chairs were super easy to put together and look fantastic...",
      helpfulVotes: 23,
    },
    // More reviews...
  ],
};

export const ReviewsContext = createContext();

const ReviewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reviewsReducer, initialState);

  return (
    <ReviewsContext.Provider value={{ state, dispatch }}>
      {children}
    </ReviewsContext.Provider>
  );
};

export default ReviewsProvider;
