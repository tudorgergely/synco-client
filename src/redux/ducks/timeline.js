const PREFIX = '@synco/timeline';

const LOAD_START = `${PREFIX}/LOAD_START`;
const LOAD_FINISH = `${PREFIX}/LOAD_FINISH`;

const defaultState = {
    timeline: [],
    loading: false
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
                timeline: action.timeline
            };
        default:
            return state;
    }
}

export const loadTimeline = () => {
    return {
        type: LOAD_START
    };
};

export const timelineLoaded = (timeline) => {
    return {
        type: LOAD_FINISH,
        timeline
    };
};