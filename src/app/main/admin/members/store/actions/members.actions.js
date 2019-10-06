import axios from 'axios';

export const GET_MEMBERS = '[MEMBERS APP] GET MEMBERS';
export const SET_MEMBERS_SEARCH_TEXT = '[MEMBERS APP] SET MEMBERS SEARCH TEXT';

export function getMembers()
{
    const request = axios.get('http://localhost:4000/members');
     return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_MEMBERS,
                payload: response.data
            })
        );
}

export function setSearchText(event)
{
    return {
        type      : SET_MEMBERS_SEARCH_TEXT,
        searchText: event.target.value
    }
}

