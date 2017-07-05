import api from '../api';
import {call, put, all, takeLatest} from "redux-saga/effects";
import {DOWNLOAD, UPLOAD, uploadFinish} from "../ducks/files";
import * as FileSaver from 'file-saver';

function* uploadFile({files}) {
    yield call(api.uploadFiles, files);

    yield put(uploadFinish())
}

function* downloadFile({file}) {
    const res = yield call(api.downloadFile, file);

    FileSaver.saveAs(new Blob([res]), file.fileMetadata.name);
}

function* fileSaga() {
    yield all([
        takeLatest(UPLOAD, uploadFile),
        takeLatest(DOWNLOAD, downloadFile)
    ]);
}

export default fileSaga;