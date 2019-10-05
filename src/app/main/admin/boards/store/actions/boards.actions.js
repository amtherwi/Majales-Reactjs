 import axios from 'axios';
 import majlesService from '../../../../../services/majlesService';

export const GET_BOARDS = '[BOARDS APP] GET BOARDS';
export const SET_BOARDS_SEARCH_TEXT = '[BOARDS APP] SET BBOARDS SEARCH TEXT';

export function getMajales(routeParams)
{
    const request = axios.get('http://localhost:21021/api/services/app/Majles/GetAll', {
        params: routeParams
    });

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_BOARDS,
                payload: response.data,
                routeParams
            })
        );
}
export function getBoards()
{
     return (dispatch) =>   
        majlesService.getMajales()
        .then((response) =>
            dispatch({
                type   : GET_BOARDS,
                payload: response.data
            })
        );
}

export function setBoardsSearchText(event)
{
    return {
        type      : SET_BOARDS_SEARCH_TEXT,
        searchText: event.target.value
    }
}

