import {fork} from "redux-saga/effects";

import timelineSaga from "./timeline";
import searchSaga from "./search";
import fileSaga from "./file";

export default function* root() {
    yield [
        fork(timelineSaga),
        fork(searchSaga),
        fork(fileSaga)
    ];
}