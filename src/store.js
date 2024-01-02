import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Features/PostSlice";

export default configureStore({
  reducer: {
    app: postReducer,
  },
});
