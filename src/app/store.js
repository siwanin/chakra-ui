import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counterSlice";
import postsReducer from "../feature/counter/posts/postsSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
});
