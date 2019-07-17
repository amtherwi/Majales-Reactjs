import * as Actions from '../actions';

const initialState = [];

const majalesrolesReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_MAJALESROLES:
        {

            return [
                ...action.payload
            ];
        }
        default:
            return state;
    }
};

export default majalesrolesReducer;
