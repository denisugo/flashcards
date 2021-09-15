import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopics: (state, action) => {
      state.topics[action.payload.id] = {
        ...action.payload,
        quizIds: []
      };
    },
    addToQuizIds: (state, action) => {
      state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
    }
  }
});

export const topicsSelector = (state) => state.topics.topics;

export const { addTopics, addToQuizIds } = topicsSlice.actions;
export default topicsSlice.reducer;
