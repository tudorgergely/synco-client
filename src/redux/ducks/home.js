export const PREFIX = '@synco/home';

export const GO_TIMELINE = `${PREFIX} GO_TIMELINE`;
export const GO_RESULTS = `${PREFIX} GO_RESULTS`;
export const GO_SETTINGS = `${PREFIX} GO_SETTINGS`;

export const TIMELINE_SCREEN = '@synco/TIMELINE_SCREEN';
export const RESULTS_SCREEN = '@synco/RESULTS_SCREEN';
export const SETTINGS_SCREEN = '@synco/SETTINGS_SCREEN';

const defaultState = {
    screen: TIMELINE_SCREEN
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case GO_TIMELINE:
            return {
                ...state,
                screen: TIMELINE_SCREEN
            };
        case GO_RESULTS:
            return {
                ...state,
                screen: RESULTS_SCREEN
            };
        case GO_SETTINGS:
            return {
                ...state,
                screen: SETTINGS_SCREEN
            };
        default:
            return state;
    }
}

export function goToTimeline() {
    return {
        type: GO_TIMELINE
    };
}

export function goToResults() {
    return {
        type: GO_RESULTS
    };
}

export function goToSettings() {
    return {
        type: GO_SETTINGS
    };
}