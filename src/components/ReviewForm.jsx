import React, { useState } from "react";
import { db } from "../lib/firebase-connect";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // Import required methods

function ReviewForm() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Use the `collection` method to reference the "reviews" collection
      const reviewsCollection = collection(db, "reviews");
      await addDoc(reviewsCollection, {
        email: email,
        fullName: fullName,
        review: review,
        rating: rating,
        hasModerated: false,
        timestamp: serverTimestamp(), // Add timestamp field
      });

      console.log("Review submitted successfully!");
      // Clear the form fields after submission
      setEmail("");
      setFullName("");
      setReview("");
      setRating(0);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">💌 Leave a Review</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="review"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Review
          </label>
          <textarea
            id="review"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Rating
          </label>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`cursor-pointer mr-1 text-gray-400 hover:text-yellow-500 ${
                  rating > i ? "text-yellow-500" : ""
                }`}
                onClick={() => setRating(i + 1)}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
