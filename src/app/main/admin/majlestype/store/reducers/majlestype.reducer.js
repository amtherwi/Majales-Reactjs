import * as Actions from '../actions';

const initialState = {
    data      : [],
    searchText: ''
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

export default majlestypeReducer;
