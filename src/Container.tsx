import React from "react";
import { useLocation } from "react-router-dom";
import Question from "./Question";
import RatingQuestion from "./ratingQuestion";
const Container = () => {
  const { state } = useLocation();
  return (
    <div>
      {state.condition === 0 ? (
        <RatingQuestion />
      ) : state.condition === 1 ? (
        <RatingQuestion />
      ) : (
        <Question />
      )}
    </div>
  );
};

export default Container;
