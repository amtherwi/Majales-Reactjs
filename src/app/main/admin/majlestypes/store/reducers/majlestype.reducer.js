import * as Actions from '../actions';

const initialState = {
    data      : [],
};

const majlestypeReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_MAJLESTYPE:
        {
            return {
                ...state,
                data: action.payload
            };
        }
        case Actions.SAVE_MAJLESTYPE:
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

export default majlestypeReducer;
