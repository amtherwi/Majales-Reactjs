import axios from 'axios';
import { majlesService } from '../../../../../services/majlesService'



export const GET_MAJALES = '[MAJALES APP] GET MAJALES';
export const SET_MAJALES_SEARCH_TEXT = '[MAJALES APP] SET MAJALES SEARCH TEXT';

export function getMajales()
{
    // return dispatch => {
    //     dispatch(request());

    //     majlesService.getMajales()
    //  
    const request = axios.get('http://localhost:21021/api/services/app/Majles/GetAll');
     return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_MAJALES,
                payload: response.data.result
            })
        );
}

export function setSearchText(event)
{
    return {
        type      : SET_MAJALES_SEARCH_TEXT,
        searchText: event.target.value
    }
}

