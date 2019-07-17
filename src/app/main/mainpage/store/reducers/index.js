import {combineReducers} from 'redux';
import majalesroles from './majalesroles.reducer';
import majalesrole from './majalesrole.reducer';
import majales from './majales.reducer';

const majalesrolesAppReducers = combineReducers({
    majalesroles,
    majalesrole,
    majales
});

export default majalesrolesAppReducers;
