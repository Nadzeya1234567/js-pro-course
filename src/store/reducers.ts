import { combineReducers } from "redux";
import { clickerReducer } from "./clicker/reducer";
import { postReducer } from "./post/reducer";
import { postsReducer } from "./posts/postsSlice";

export default combineReducers({
  // [name]: nameReducer
  clicker: clickerReducer,
  post: postReducer,
  posts: postsReducer,
});
