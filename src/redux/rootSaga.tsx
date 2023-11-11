import { takeLatest } from "redux-saga/effects";
import { init } from './controllers/startup';
import { getCurrentSituation } from './controllers/now';
import { INIT, GET_CURRENT_SITUATION } from './actions';

function* rootSaga() {
  yield takeLatest(INIT, init);
  yield takeLatest(GET_CURRENT_SITUATION, getCurrentSituation);
};

export default rootSaga;