// import * as Actions from '../actions';

// const initialState = {
//     data      : [],
//     majlestypeDialog     : {
//         type : 'new',
//         props: {
//             open: false
//         },
//         data : null
//     }
// };

// const majlestypeReducer = function (state = initialState, action) {
//     switch ( action.type )
//     {
//         case Actions.GET_MAJLESTYPE:
//         {
//             return {
//                 ...state,
//                 data: action.payload
//             };
//         }
//         case Actions.SAVE_MAJLESTYPE:
//         {
//                 return {
//                     ...state,
//                     data: action.payload
//                 };
//         }
//         case Actions.OPEN_NEW_MAJLESTYPE_DIALOG:
//         {
//                 return {
//                     ...state,
//                     majlestypeDialog: {
//                         type : 'new',
//                         props: {
//                             open: true
//                         },
//                         data : null
//                     }
//                 };
//         }
//         case Actions.CLOSE_NEW_MAJLESTYPE_DIALOG:
//         {
//                 return {
//                     ...state,
//                     majlestypeDialog: {
//                         type : 'new',
//                         props: {
//                             open: false
//                         },
//                         data : null
//                     }
//                 };
//         }
//         case Actions.OPEN_EDIT_MAJLESTYPE_DIALOG:
//         {
//             return {
//                 ...state,
//                 majlestypeDialog: {
//                     type : 'edit',
//                     props: {
//                         open: true
//                     },
//                     data : action.data
//                 }
//             };
//         }
//         case Actions.CLOSE_EDIT_MAJLESTYPE_DIALOG:
//         {
//             return {
//                 ...state,
//                 majlestypeDialog: {
//                     type : 'edit',
//                     props: {
//                         open: false
//                     },
//                     data : null
//                 }
//             };
//         }
//         default:
//         {
//             return state;
//         }
//     }
// };

// export default majlestypeReducer;
