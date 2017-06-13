import api from "../api";
import {LOAD_START, timelineLoaded} from "../ducks/timeline";
import {call, put, takeLatest} from "redux-saga/effects";

function* fetchTimeline({page}) {
    const timeline = yield call(api.fetchTimeline, page);

    yield put(timelineLoaded(timeline));
}

function* timelineRequestedSaga() {
    yield takeLatest(LOAD_START, fetchTimeline);
}

export default timelineRequestedSaga;