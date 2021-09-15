import { configureStore } from "@reduxjs/toolkit";
import CardsSlice from "../features/cards/CardsSlice";
import QuizzesSlice from "../features/quizzes/QuizzesSlice";
import TopicSlice from "../features/topics/TopicSlice";

export default configureStore({
  reducer: {
    topics: TopicSlice,
    quizzes: QuizzesSlice,
    cards: CardsSlice,
  },
});
