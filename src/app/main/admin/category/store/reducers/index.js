import {combineReducers} from 'redux';
import members from './members.reducer';
import user from './user.reducer';

const reducer = combineReducers({
    members,
    user
});

export default reducer;
