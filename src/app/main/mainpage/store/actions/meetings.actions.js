import axios from 'axios';
import history from '@history';

export const GET_MEETINGS = '[MEETINGS APP] GET MEETINGS';

export function getMeetings()
{
    const request = axios.get('/api/scrumboard-app/boards');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_MEETINGS,
                payload: response.data
            })
        );
}


