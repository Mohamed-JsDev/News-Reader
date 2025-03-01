import { configureStore } from "@reduxjs/toolkit";
import saveReducer from "./saveSlice";
import ArticlesSlice from "./ArticlesSlice";
export const store = configureStore({
  reducer: {
    savedArticles: saveReducer,
    Articles: ArticlesSlice,
  },
});
