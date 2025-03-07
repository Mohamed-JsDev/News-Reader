import { createSlice } from "@reduxjs/toolkit";

export const saveSlice = createSlice({
  initialState: [],
  name: "savedArticles",
  reducers: {
    addArticle: (state, action) => {
      state.push(action.payload);
    },
    removeArticle: (state, action) => {
      return state.filter((article) => article.id !== action.payload.id);
    },
  },
});

export const { addArticle, removeArticle } = saveSlice.actions;

export default saveSlice.reducer;
