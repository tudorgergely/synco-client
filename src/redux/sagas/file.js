import api from '../api';
import {call, put} from "redux-saga/effects";
import {DOWNLOAD, UPLOAD, uploadFinish} from "../ducks/files";

function* uploadFile({files}) {
    yield call(api.uploadFiles, files);

    yield put(uploadFinish())
}

function* downloadFile({file}) {
    yield call(api.downloadFile, file);
}

function* fileSaga() {
    yield all([
        takeLatest(UPLOAD, uploadFile),
        takeLatest(DOWNLOAD, downloadFile)
    ]);
}

export default fileSaga;