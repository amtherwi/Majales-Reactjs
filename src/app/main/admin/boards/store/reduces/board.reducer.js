import * as Actions from '../actions';

const initialState = {
    data: null
};

const boardReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_BOARD:
        {
            return {
                ...state,
                data: action.payload
            };
        }
        case Actions.SAVE_BOARD:
        {
            return {
                ...state,
                data: action.payload
            };
        }
        default:
        {
            return state;
        }
    }
};

export default boardReducer;
