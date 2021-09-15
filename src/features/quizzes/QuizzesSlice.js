import { createSlice } from "@reduxjs/toolkit";
import { addToQuizIds } from "../topics/TopicSlice";

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes[action.payload.id] = {
        ...action.payload
      };
    }
  }
});

export const quizzesSelector = (state) => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;

export const thunkActionCreator = (payload) => {
  return (dispatch) => {
    dispatch(addQuiz(payload));
    dispatch(addToQuizIds({ topicId: payload.topicId, quizId: payload.id }));
  };
};
