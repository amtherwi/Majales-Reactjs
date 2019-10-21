import {combineReducers} from 'redux';
import majlestypes from './majlestypes.reducer';
import calssification from './classification.reducer'
const reducer = combineReducers({
    majlestypes,
    calssification
});

export default reducer;
