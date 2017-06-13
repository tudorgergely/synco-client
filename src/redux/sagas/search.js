import api from "../api";
import {call, takeLatest, all, put} from "redux-saga/effects";
import {LOAD_RECENT_START, recentLoaded, SEARCH} from "../ducks/search";
import {goToResults} from "../ducks/home";
import {searchFinished} from "../ducks/files";

function* search({text}) {
    const results = yield call(api.search, text);

    yield put(searchFinished(results));
    yield put(goToResults());
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