import api from "../api";
import {call, takeLatest, all, put} from "redux-saga/effects";
import {LOAD_RECENT_START, recentLoaded, SEARCH} from "../ducks/search";
import {goToResults} from "../ducks/home";
import {searchFinished} from "../ducks/files";

function* search(p) {
    try {
        const results = yield call(api.search, p.term);

        yield put(searchFinished(results));
        yield put(goToResults());
    } catch (e) {
        console.error(e);
    }

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