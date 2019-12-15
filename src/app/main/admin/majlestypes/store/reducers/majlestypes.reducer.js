import * as Actions from '../actions';

const initialState = {
    data      : [],
    searchText: '',
    majlestypeDialog     : {
        type : 'new',
        props: {
            open: false
        },
        data : null
    },
    alertDialog     : {
        props: {
            open: false
        },
        data : null
    },
    expanded: false
    
};

const majlestypesReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_MAJLESTYPES:
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
        case Actions.OPEN_NEW_MAJLESTYPE_DIALOG:
        {
                return {
                    ...state,
                    majlestypeDialog: {
                        type : 'new',
                        props: {
                            open: true
                        },
                        data : null
                    }
                };
        }
        case Actions.CLOSE_NEW_MAJLESTYPE_DIALOG:
        {
                return {
                    ...state,
                    majlestypeDialog: {
                        type : 'new',
                        props: {
                            open: false
                        },
                        data : null
                    }
                };
        }
        case Actions.OPEN_EDIT_MAJLESTYPE_DIALOG:
        {
            return {
                ...state,
                majlestypeDialog: {
                    type : 'edit',
                    props: {
                        open: true
                    },
                    data : action.data
                }
            };
        }
        case Actions.CLOSE_EDIT_MAJLESTYPE_DIALOG:
        {
            return {
                ...state,
                majlestypeDialog: {
                    type : 'edit',
                    props: {
                        open: false
                    },
                    data : null
                }
            };
        }
        case Actions.OPEN_ALERT_DIALOG:
        {
            return {
                ...state,
                alertDialog: {
                    props: {
                        open: true
                    },
                    data : action.data
                }
            };
        }
        case Actions.CLOSE_ALERT_DIALOG:
        {
            return {
                ...state,
                alertDialog: {
                    props: {
                        open: false
                    },
                    data : null
                }
            };
        }
        case Actions.EXPANDED_EXPANSION:
        {
                return {
                    ...state,
                    expanded: action.data
                };
        }
        case Actions.COLLAPSED_EXPANSION:
        {
                return {
                    ...state,
                    expanded: false
                };
         }
        default:
        {
            return state;
        }
    }
};

export default majlestypesReducer;
