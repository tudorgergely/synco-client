const PREFIX = '@synco/timeline';

export const SEARCH = `${PREFIX}/SEARCH`;
export const SEARCH_FINISHED = `${PREFIX}/SEARCH_FINISHED`;

export const OPEN = `${PREFIX}/OPEN`;
export const CLOSE = `${PREFIX}/CLOSE`;

export const LOAD_RECENT_START = `${PREFIX}/LOAD_RECENT_START`;
export const LOAD_RECENT_FINISH = `${PREFIX}/LOAD_RECENT_FINISH`;

const defaultState = {
    term: null,
    recentSearches: [],
    open: false
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                term: action.term
            };
        case SEARCH_FINISHED:
            return {
                ...state,
                results: action.results
            };
        case LOAD_RECENT_START:
            return {
                ...state,
                recentSearches: action.recentSearches
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
        default:
            return state;
    }
}

export const search = (term) => {
    return {
        type: SEARCH,
        term
    };
};

export const searchFinished = (results) => {
    return {
        type: SEARCH_FINISHED,
        results
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
