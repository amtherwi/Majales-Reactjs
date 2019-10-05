import axios from 'axios';
import { getUserData } from 'app/main/admin/members/store/actions/user.actions';
import membersDB from './memberDB';

export const GET_MEMBERS                = '[MEMBERS APP] GET MEMBERS';
export const SET_SEARCH_TEXT            = '[MEMBERS APP] SET SEARCH TEXT';
export const TOGGLE_IN_SELECTED_MEMBERS = '[MEMBERS APP] TOGGLE IN SELECTED MEMBERS';
export const SELECT_ALL_MEMBERS         = '[MEMBERS APP] SELECT ALL MEMBERS';
export const DESELECT_ALL_MEMBERS       = '[MEMBERS APP] DESELECT ALL MEMBERS';
export const OPEN_NEW_MEMBER_DIALOG     = '[MEMBERS APP] OPEN NEW MEMBER DIALOG';
export const CLOSE_NEW_MEMBER_DIALOG    = '[MEMBERS APP] CLOSE NEW MEMBER DIALOG';
export const OPEN_EDIT_MEMBER_DIALOG    = '[MEMBERS APP] OPEN EDIT MEMBER DIALOG';
export const CLOSE_EDIT_MEMBER_DIALOG   = '[MEMBERS APP] CLOSE EDIT MEMBER DIALOG';
export const ADD_MEMBER                 = '[MEMBERS APP] ADD MEMBER';
export const UPDATE_MEMBER              = '[MEMBERS APP] UPDATE MEMBER';
export const REMOVE_MEMBER              = '[MEMBERS APP] REMOVE MEMBER';
export const REMOVE_MEMBERS             = '[MEMBERS APP] REMOVE MEMBERS';
export const TOGGLE_CHAIRMAN_MEMBER      = '[MEMBERS APP] TOGGLE CHAIRMAN MEMBER';
export const TOGGLE_ُTRUSTWORTHY_MEMBERS     = '[MEMBERS APP] TOGGLE TRUSTWORTHY MEMBERS';
export const TOGGLE_SECURTARY_MEMBERS     = '[MEMBERS APP] TOGGLE SECURTARY MEMBERS';
 
// http://localhost:3005/   
///api/members-app/members
// created: () => {
//     fetch('data/db.json')
//       .then(r => r.json())
//       .then(json => {
//         this.db = json
//       })

export function getMembers(routeParams)
{
    
    const request = fetch('/src/majalesDB.js').then(members => members.json());

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_MEMBERS,
                payload: response.data.members,
                routeParams
            })
        );
}

export function setSearchText(event)
{
    return {
        type      :  SET_SEARCH_TEXT,
        searchText: event.target.value
    }
}

export function toggleInSelectedMembers(memberId)
{
    return {
        type:  TOGGLE_IN_SELECTED_MEMBERS,
        memberId
    }
}

export function selectAllMembers()
{
    return {
        type:  SELECT_ALL_MEMBERS
    }
}

export function deSelectAllMembers()
{
    return {
        type:  DESELECT_ALL_MEMBERS
    }
}

export function openNewMemberDialog()
{
    return {
        type:  OPEN_NEW_MEMBER_DIALOG
    }
}

export function closeNewMemberDialog()
{
    return {
        type:  CLOSE_NEW_MEMBER_DIALOG
    }
}

export function openEditMemberDialog(data)
{
    return {
        type:  OPEN_EDIT_MEMBER_DIALOG,
        data
    }
}

export function closeEditMemberDialog()
{
    return {
        type:  CLOSE_EDIT_MEMBER_DIALOG
    }
}

export function addMember(newMember)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().membersApp.members;

        const request = axios.post('/api/members-app/add-member', {
            newMember
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type:  ADD_MEMBER
                })
            ]).then(() => dispatch(getMembers(routeParams)))
        );
    };
}

export function updateMember(Member)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().membersApp.members;

        const request = axios.post('/api/members-app/update-member', {
            Member
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type:  UPDATE_MEMBER
                })
            ]).then(() => dispatch(getMembers(routeParams)))
        );
    };
}

export function removeMember(memberId)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().membersApp.members;

        const request = axios.post('/api/members-app/remove-member', {
            memberId
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type:  REMOVE_MEMBER
                })
            ]).then(() => dispatch(getMembers(routeParams)))
        );
    };
}


export function removeMembers(memberIds)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().membersApp.members;

        const request = axios.post('/api/members-app/remove-members', {
            memberIds
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type:  REMOVE_MEMBERS
                }),
                dispatch({
                    type:  DESELECT_ALL_MEMBERS
                })
            ]).then(() => dispatch(getMembers(routeParams)))
        );
    };
}

// export function toggleStarredMember(MemberId)
// {
//     return (dispatch, getState) => {
//         const {routeParams} = getState().MembersApp.Members;

//         const request = axios.post('/api/Members-app/toggle-starred-Member', {
//             MemberId
//         });

//         return request.then((response) =>
//             Promise.all([
//                 dispatch({
//                     type:  TOGGLE_STARRED_Member
//                 }),
//                 dispatch(getUserData())
//             ]).then(() => dispatch(getMembers(routeParams)))
//         );
//     };
// }

// export function togglechairmanMembers(MemberIds)
// {
//     return (dispatch, getState) => {

//         const {routeParams} = getState().membersApp.members;

//         const request = axios.post('/api/members-app/toggle-chairman-members', {
//             MemberIds
//         });

//         return request.then((response) =>
//             Promise.all([
//                 dispatch({
//                     type:  TOGGLE_CHAIRMAN_MEMBER
//                 }),
//                 dispatch({
//                     type:  DESELECT_ALL_MEMBERS
//                 }),
//                 dispatch(getUserData())
//             ]).then(() => dispatch(getMembers(routeParams)))
//         );
//     };
// }

// export function toggleTrustworthyMembers(MemberIds)
// {
//     return (dispatch, getState) => {

//         const {routeParams} = getState().membersApp.members;

//         const request = axios.post('/api/members-app/toggle-trustworthy-members', {
//             MemberIds
//         });

//         return request.then((response) =>
//             Promise.all([
//                 dispatch({
//                     type:  TOGGLE_ُTRUSTWORTHY_MEMBERS
//                 }),
//                 dispatch({
//                     type:  DESELECT_ALL_MEMBERS
//                 }),
//                 dispatch(getUserData())
//             ]).then(() => dispatch(getMembers(routeParams)))
//         );
//     };
// }


