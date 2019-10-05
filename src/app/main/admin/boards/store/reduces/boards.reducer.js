import * as Actions from '../actions';

const initialState = {
    data      : [],
    searchText: ''
};

const boardsReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_BOARDS:
        {
            return {
                ...state,
                data: action.payload
            };
        }
        case Actions.SET_BOARDS_SEARCH_TEXT:
        {
            return {
                ...state,
                searchText: action.searchText
            };
        }
        default:
        {
            return state;
        }
    }
};

export default boardsReducer;
