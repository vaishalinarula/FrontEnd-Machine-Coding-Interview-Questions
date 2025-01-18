export const reviewsReducer = (state, action) => {
  switch (action.type) {
    case 'SORT_REVIEWS':
      let sortedReviews;
      if (action.payload === 'Latest') {
        sortedReviews = [...state.reviews].sort((a, b) => new Date(b.date) - new Date(a.date));
      } else if (action.payload === 'Most Helpful') {
        sortedReviews = state.reviews.sort((a, b) => b.helpfulVotes - a.helpfulVotes);
      } else if (action.payload === 'Highest Rating') {
        sortedReviews = [...state.reviews].sort((a, b) => b.rating - a.rating);
      } else if (action.payload === 'Lowest Rating') {
        sortedReviews = [...state.reviews].sort((a, b) => a.rating - b.rating);
      } else {
        sortedReviews = [...state.reviews]; // Default to most relevant (original order)
      }
      return { ...state, reviews: sortedReviews };

    default:
      return state;
  }
};
