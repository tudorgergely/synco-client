const PREFIX = '@synco/timeline';

export const SEARCH = `${PREFIX}/SEARCH`;

export const OPEN = `${PREFIX}/OPEN`;
export const CLOSE = `${PREFIX}/CLOSE`;

export const LOAD_RECENT_START = `${PREFIX}/LOAD_RECENT_START`;
export const LOAD_RECENT_FINISH = `${PREFIX}/LOAD_RECENT_FINISH`;

const defaultState = {
    term: '',
    recentSearches: [1, 2, 3],
    open: false,
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                term: action.term
            };
        case LOAD_RECENT_START:
            return {
                ...state
            };
        case OPEN:
            return {
                ...state,
                open: true
            };
        case CLOSE:
            return {
                ...state,
                open: false
            };
        case LOAD_RECENT_FINISH:
            return {
                ...state,
                recentSearches: action.recentSearches
            };
        default:
            return state;
    }
}

export const open = () => {
    return {
        type: OPEN
    }
};

export const close = () => {
    return {
        type: CLOSE
    };
};

export const search = (term) => {
    return {
        type: SEARCH,
        term
    };
};

export const loadRecent = () => {
    return {
        type: LOAD_RECENT_START
    };
};

export const recentLoaded = (recentSearches) => {
    return {
        type: LOAD_RECENT_FINISH,
        recentSearches
    };
};
