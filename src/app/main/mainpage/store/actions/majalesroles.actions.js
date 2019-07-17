import axios from 'axios';
import history from '@history';

export const GET_MAJALESROLES = '[MAJALESROLES APP] GET MAJALESROLES';

export function getMajalesRoles()
{
    const request = axios.get('/api/scrumboard-app/boards');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_MAJALESROLES,
                payload: response.data
            })
        );
}


