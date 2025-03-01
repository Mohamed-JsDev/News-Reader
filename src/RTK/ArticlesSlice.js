/* eslint-disable no-empty-pattern */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const FetchArticles = createAsyncThunk(
  "ArticlesSlice/FetchArticles",
  async () => {
    const res = await fetch(
      "https://newsapi.org/v2/everything?q=news&apiKey=219b2028a41f4abcbf966d17964490d4"
      // "https://newsapi.org/v2/everything?q=apple&from=2025-01-31&to=2025-01-31&sortBy=popularity&apiKey=219b2028a41f4abcbf966d17964490d4"
    );
    const data = await res.json();
    return data;
  }
);
const ArticlesSlice = createSlice({
  initialState: [],
  name: "ArticlesSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchArticles.fulfilled, (state, action) => {
      return action.payload.articles;
    });
  },
});
export const {} = ArticlesSlice.actions;
export default ArticlesSlice.reducer;
