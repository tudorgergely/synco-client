import api from "../api";
import {LOAD_FINISH, LOAD_START, timelineLoaded} from "../ducks/timeline";
import {takeLatest, call, put} from "redux-saga/effects";

function* fetchTimeline({page}) {
    const timeline = yield call(api.fetchTimeline, page);

    yield put(timelineLoaded(timeline));
}

function* timelineRequestedSaga() {
    yield takeLatest(LOAD_START, fetchTimeline);
}

export default timelineRequestedSaga;