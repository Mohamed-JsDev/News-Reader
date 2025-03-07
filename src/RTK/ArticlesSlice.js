/* eslint-disable no-empty-pattern */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const FetchArticles = createAsyncThunk(
  "ArticlesSlice/FetchArticles",
  async () => {
    const API_KEY = "gwmoIZWEHkvQo6vaCStx02ITvdCo_5tkKB07WQk4ZkI";
    const BASE_URL = "https://api.newsdatahub.com/v1/news";
    const headers = {
      "X-Api-Key": API_KEY,
    };

    const res = await fetch(BASE_URL, { headers });
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
      return action.payload.data;
    });
  },
});
export const {} = ArticlesSlice.actions;
export default ArticlesSlice.reducer;
