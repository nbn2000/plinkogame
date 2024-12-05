import React, { useState, useEffect } from "react";
import ReviewForm from "../../components/ReviewForm";
import dude from "/src/assets/avatar.jpg";
import useLocales from "/src/hooks/useLocales";
import { db } from "../../lib/firebase-connect";
import { collection, getDocs } from "firebase/firestore"; // Import required methods
import ReviewCard from "../../components/ReviewCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const LastOne = () => {
  const { t } = useLocales();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsCollection = collection(db, "reviews");
      const querySnapshot = await getDocs(reviewsCollection);
      const fetchedReviews = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(fetchedReviews);
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <div className="flex justify-start px-4 items-center flex-wrap md:flex-nowrap w-full gap-[23px] mt-[35px]">
        <div className="w-[100px] h-[100px] rounded-[50%] aspect-square">
          <img
            src={dude}
            alt="dude with beard"
            className="rounded-[50%] w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-start items-start gap-[20px] flex-col">
          <span className="font-[400] text-[#2E3246]">
            {t(
              "James Carter is a dedicated enthusiast of digital games and a renowned online gaming analyst with over a decade of experience. Holding a degree in Game Design from the University of London, he combines a passion for immersive storytelling and cutting-edge technology to excel as a leading expert in online slots. Known for his detailed reviews and strategic insights, James continues to explore the latest releases, sharing valuable experiences with his audience. When not diving into the world of gaming, he enjoys traveling and discovering new cultures, drawing inspiration for his next articles."
            )}
          </span>
        </div>
      </div>
      <div className="max-w-[70%] mx-auto">
        <ReviewForm />
      </div>
      <div>
        <div className="reviews-container overflow-x-auto flex flex-nowrap container">
          {reviews.map((review) => (
            <ReviewCard key={review.id} reviewData={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastOne;
