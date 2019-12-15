import * as Actions from '../actions';
import {OPEN_NEW_MAJLES_DIALOG} from "../actions";
import {CLOSE_NEW_MAJLES_DIALOG} from "../actions";
import {OPEN_EDIT_MAJLES_DIALOG} from "../actions";
import {CLOSE_EDIT_MAJLES_DIALOG} from "../actions";

const initialState = {
    data      : [],
    majalestypes      : [],
    searchText: '',
    majalesDialog     : {
        type : 'new',
        props: {
            open: false
        },
        data : null
    }
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
        case Actions.GET_MAJLESTYPES:
        {
            return {
                ...state,
                majalestypes: action.payload
            };
        }
        case Actions.SET_MAJALES_SEARCH_TEXT:
        {
            return {
                ...state,
                searchText: action.searchText
            };
        }
        case Actions.OPEN_NEW_MAJLES_DIALOG:
        {
            return {
                ...state,
                majalesDialog: {
                    type : 'new',
                    props: {
                        open: true
                    },
                    data : null
                }
            };
        }
        case Actions.CLOSE_NEW_MAJLES_DIALOG:
        {
            return {
                ...state,
                majalesDialog: {
                    type : 'new',
                    props: {
                        open: false
                    },
                    data : null
                }
            };
        }
        case Actions.OPEN_EDIT_MAJLES_DIALOG:
        {
            return {
                ...state,
                majalesDialog: {
                    type : 'edit',
                    props: {
                        open: true
                    },
                    data : action.data
                }
            };
        }
        case Actions.CLOSE_EDIT_MAJLES_DIALOG:
        {
            return {
                ...state,
                majalesDialog: {
                    type : 'edit',
                    props: {
                        open: false
                    },
                    data : null
                }
            };
        }
        default:
        {
            return state;
        }
    }
};

export default majalesReducer;
