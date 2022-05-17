import { all, spawn, take } from "redux-saga/effects";
import postsSaga from "./posts/postsSaga";
import authSaga from "./auth/authSaga";

const sagas = function* () {
  yield all([spawn(postsSaga)]);
  yield all([spawn(authSaga)]);
};
export default sagas;
