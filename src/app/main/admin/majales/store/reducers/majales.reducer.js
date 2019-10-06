import * as Actions from '../actions';

const initialState = {
    data      : [],
    searchText: ''
};

const majalesReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_MAJALES:
        {
            return {
                ...state,
                data: action.payload
            };
        }
        case Actions.SET_MAJALES_SEARCH_TEXT:
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

export default majalesReducer;
