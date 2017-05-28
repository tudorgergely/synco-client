import api from "../api";
import {call, takeLatest, all} from "redux-saga/effects";
import {LOAD_RECENT_START, recentLoaded, SEARCH, searchFinished} from "../ducks/search";

function* search({text}) {
    const results = yield call(api.search, text);

    yield put(searchFinished(results));
}

function* loadRecents() {
    const recents = yield call(api.getRecentSearches);

    yield put(recentLoaded(recents));
}

function* searchSaga() {
    yield all([
        takeLatest(SEARCH, search),
        takeLatest(LOAD_RECENT_START, loadRecents)
    ]);
}

export default searchSaga;