import {combineReducers} from 'redux';
import majlestypes from './majlestypes.reducer';
import classification from './classification.reducer'
// import majlestype from './majlestype.reducer';

const reducer = combineReducers({
    majlestypes,
    classification
    // majlestype
});

export default reducer;
