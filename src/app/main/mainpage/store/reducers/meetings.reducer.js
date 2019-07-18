import * as Actions from '../actions';
import _ from '@lodash';

const initialState = null;

const meetingsReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_MEETINGS:
        {
            return {
                ...action.payload
            };
        }
        default:
            return state;
    }
};

export default meetingsReducer;
