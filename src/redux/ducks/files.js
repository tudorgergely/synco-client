const PREFIX = '@synco/files';

const LOAD_START = `${PREFIX}/LOAD_START`;
const LOAD_FINISH = `${PREFIX}/LOAD_FINISH`;

const UPLOAD = `${PREFIX}/UPLOAD_START`;
const UPLOAD_FINISH = `${PREFIX}/UPLOAD_FINISH`;

const DOWNLOAD = `${PREFIX}/DOWNLOAD`;

const defaultState = {
    files: [],
    loading: false,
    uploadInProgress: null
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case LOAD_START:
            return {
                ...state,
                loading: true
            };
        case LOAD_FINISH:
            return {
                ...state,
                loading: false,
                files: action.files
            };
        case UPLOAD:
            return {
                ...state,
                uploadInProgress: action.uploadInProgress
            };
        case UPLOAD_FINISH:
            return {
                ...state,
                uploadInProgress: null
            };
        case DOWNLOAD:
        default:
            return state;
    }
}

export const startFilesLoad = () => {
    return {
        type: LOAD_START
    };
};

export const filesLoaded = (files) => {
    return {
        type: LOAD_FINISH,
        files
    }
};

export const uploadFile = (uploadInProgress) => {
    return {
        type: UPLOAD,
        uploadInProgress
    };
};

export const uploadFinish = () => {
    return {
        type: UPLOAD_FINISH
    };
};

export const downloadFile = (file) => {
    return {
        type: DOWNLOAD,
        file
    };
};