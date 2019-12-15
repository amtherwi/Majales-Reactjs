import {combineReducers} from 'redux';
import majlestypes from './majlestypes.reducer';
import classification from './classification.reducer'

const reducer = combineReducers({
    majlestypes,
    classification
});

export default reducer;
