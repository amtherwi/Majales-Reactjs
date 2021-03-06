import * as Actions from '../actions';

const initialState = {
    data      : [],
    searchText: ''
};

const membersReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_MEMBERS:
        {
            return {
                ...state,
                data: action.payload
            };
        }
        case Actions.SET_MEMBERS_SEARCH_TEXT:
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

export default membersReducer;
