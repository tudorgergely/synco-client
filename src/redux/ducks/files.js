const PREFIX = '@synco/files';

export const UPLOAD = `${PREFIX}/UPLOAD_START`;
const UPLOAD_FINISH = `${PREFIX}/UPLOAD_FINISH`;

export const DOWNLOAD = `${PREFIX}/DOWNLOAD`;

const defaultState = {
    uploadInProgress: null
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
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