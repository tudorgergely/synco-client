const PREFIX = '@synco/timeline';

const SEARCH = `${PREFIX}/SEARCH`;

const LOAD_RECENT_START = `${PREFIX}/LOAD_RECENT_START`;
const LOAD_RECENT_FINISH = `${PREFIX}/LOAD_RECENT_FINISH`;

const defaultState = {
    term: null,
    recentSearches: []
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
                ...state,
                recentSearches: action.recentSearches
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
