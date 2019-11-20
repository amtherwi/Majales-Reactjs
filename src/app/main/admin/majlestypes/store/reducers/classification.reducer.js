import * as Actions from '../actions';

const initialState = {
    data      : [],
    // searchText: ''
};

const classificationReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_CLASSIFICATION:
        {
            return {
                ...state,
                data: action.payload
            };
        }
        case Actions.SAVE_CLASSIFICATION:
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

export default classificationReducer;
