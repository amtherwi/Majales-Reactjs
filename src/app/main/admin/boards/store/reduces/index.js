import {combineReducers} from 'redux';
import boards from './boards.reducer';
import board from './board.reducer'

const reducer = combineReducers({
    boards,
    board
});

export default reducer;
