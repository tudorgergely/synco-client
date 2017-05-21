import {combineReducers} from 'redux';

import files from './files';
import timeline from './timeline';
import search from './search';

export default combineReducers({
    files,
    timeline,
    search,
})