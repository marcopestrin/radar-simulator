import { takeLatest } from "redux-saga/effects";
import { init } from './controllers/startup';
import { INIT } from './actions';

function* rootSaga() {
  yield takeLatest(INIT, init);
};

export default rootSaga;