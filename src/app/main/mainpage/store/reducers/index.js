import {combineReducers} from 'redux';
import majalesroles from './majalesroles.reducer';
import majalesrole from './meetings.reducer';
import majales from './majales.reducer';

const majalesrolesAppReducers = combineReducers({
    majalesroles,
    majalesrole,
    majales
});

export default majalesrolesAppReducers;
