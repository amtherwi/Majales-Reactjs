import axios from 'axios';

export const GET_USER_DATA = '[MEMBERS APP] GET USER DATA';

export function getUserData()
{
    const request = axios.get('/api/members-app/boardMembership');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_USER_DATA,
                payload: response.data
            })
        );
}
