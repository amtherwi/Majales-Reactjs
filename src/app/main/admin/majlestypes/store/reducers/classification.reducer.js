import * as Actions from '../actions';
//---------
const initialState = {
    data      : [],
    classificationDialog     : {
        type : 'new',
        props: {
            open: false
        },
        data : null
    },
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
            case Actions.OPEN_NEW_CLASSIFICATION_DIALOG:
                {
                        return {
                            ...state,
                            classificationDialog: {
                                type : 'new',
                                props: {
                                    open: true
                                },
                                data : null
                            }
                        };
                }
                case Actions.CLOSE_NEW_CLASSIFICATION_DIALOG:
                {
                        return {
                            ...state,
                            classificationDialog: {
                                type : 'new',
                                props: {
                                    open: false
                                },
                                data : null
                            }
                        };
                }
                case Actions.OPEN_EDIT_CLASSIFICATION_DIALOG:
                {
                    return {
                        ...state,
                        classificationDialog: {
                            type : 'edit',
                            props: {
                                open: true
                            },
                            data : action.data
                        }
                    };
                }
                case Actions.CLOSE_EDIT_CLASSIFICATION_DIALOG:
                {
                    return {
                        ...state,
                        classificationDialog: {
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

export default classificationReducer;
