import * as Actions from '../actions';
import _ from '@lodash';

const initialState = {
    entities          : null,
    searchText        : '',
    selectedMemberIds: [],
    routeParams       : {},
    memberDialog     : {
        type : 'new',
        props: {
            open: false
        },
        data : null
    }
};

const membersReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_MEMBERS:
        {
            return {
                ...state,
                entities   : _.keyBy(action.payload, 'id'),
                routeParams: action.routeParams
            };
        }
        case Actions.SET_SEARCH_TEXT:
        {
            return {
                ...state,
                searchText: action.searchText
            };
        }
        case Actions.TOGGLE_IN_SELECTED_MEMBERS:
        {

            const memberId = action.memberId;

            let selectedMemberIds = [...state.selectedMemberIds];

            if ( selectedMemberIds.find(id => id === memberId) !== undefined )
            {
                selectedMemberIds = selectedMemberIds.filter(id => id !== memberId);
            }
            else
            {
                selectedMemberIds = [...selectedMemberIds, memberId];
            }

            return {
                ...state,
                selectedMemberIds: selectedMemberIds
            };
        }
        case Actions.SELECT_ALL_MEMBERS:
        {
            const arr = Object.keys(state.entities).map(k => state.entities[k]);

            const selectedMemberIds = arr.map(member => member.id);

            return {
                ...state,
                selectedMemberIds: selectedMemberIds
            };
        }
        case Actions.DESELECT_ALL_MEMBERS:
        {
            return {
                ...state,
                selectedMemberIds: []
            };
        }
        case Actions.OPEN_NEW_MEMBER_DIALOG:
        {
            return {
                ...state,
                 memberDialog: {
                    type : 'new',
                    props: {
                        open: true
                    },
                    data : null
                }
            };
        }
        case Actions.CLOSE_NEW_MEMBER_DIALOG:
        {
            return {
                ...state,
                 memberDialog: {
                    type : 'new',
                    props: {
                        open: false
                    },
                    data : null
                }
            };
        }
        case Actions.OPEN_EDIT_MEMBER_DIALOG:
        {
            return {
                ...state,
                 memberDialog: {
                    type : 'edit',
                    props: {
                        open: true
                    },
                    data : action.data
                }
            };
        }
        case Actions.CLOSE_EDIT_MEMBER_DIALOG:
        {
            return {
                ...state,
                 memberDialog: {
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

export default membersReducer;
