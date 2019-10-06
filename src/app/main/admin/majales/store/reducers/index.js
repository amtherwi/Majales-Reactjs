import {combineReducers} from 'redux';
import majales from './majales.reducer';
import user from './user.reducer';

const reducer = combineReducers({
    majales,
    user
});

export default reducer;
