// ReviewCard.jsx
import React from "react";
import { format } from "date-fns";

function ReviewCard({ reviewData }) {
  const { fullName, hasModerated, rating, review, timestamp } = reviewData;

  // Format the timestamp for display
  let formattedTimestamp = "";
  if (timestamp) {
    formattedTimestamp = format(timestamp.toDate(), "MMMM do, yyyy, h:mm a");
  }

  // Define the getRatingStars function here
  const getRatingStars = (rating) => {
    let stars = "";
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars += "★"; // Use the Unicode character for a filled star
      } else {
        stars += "☆"; // Use the Unicode character for an empty star
      }
    }
    return stars;
  };

  return (
    <div className="review-card bg-white rounded-lg shadow-md p-4 m-2 flex flex-col min-w-96">
      <h3 className="text-xl font-bold mb-2">{fullName}</h3>
      <div className="rating mb-2">{getRatingStars(rating)}</div>
      <p className="text-gray-700 mb-2">{review}</p>
      <p className="text-gray-500 text-sm">
        Submitted on: {formattedTimestamp}
      </p>
      {hasModerated && <p className="text-green-500 text-sm">Moderated</p>}
    </div>
  );
}

export default ReviewCard;
