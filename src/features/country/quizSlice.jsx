import { createSlice } from "@reduxjs/toolkit";
import { GLOBAL_QUESTIONS } from "../../config/globalQuestions";

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const shuffledQuestions = GLOBAL_QUESTIONS.map(question => ({
  ...question,
  options: shuffleArray([...question.options])
}));

const shuffledQuesArray = shuffleArray(shuffledQuestions)

const initialState = {
  globalQuiz: shuffledQuesArray,
  totalQuestions: GLOBAL_QUESTIONS.length,
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    handleChangeRadio: (state, action) => {
      const { queId, selectOpt } = action.payload;
      state.globalQuiz = state.globalQuiz.map(que => que.id === queId ? { ...que, selectOpt } : que);
    },
    generateQuestions:(state,action) => {
      // console.log(shuffledQuesArray)
      state.globalQuiz = shuffledQuesArray.slice(0,action.payload)
    }
  }
});

export const { handleChangeRadio,generateQuestions } = quizSlice.actions;
export default quizSlice.reducer;
