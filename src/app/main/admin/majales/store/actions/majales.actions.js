import  majlesService  from 'app/services/majlesService'


export const GET_MAJALES = '[MAJALES APP] GET MAJALES';
export const SET_MAJALES_SEARCH_TEXT = '[MAJALES APP] SET MAJALES SEARCH TEXT';

export function getMajales()
{
     return (dispatch) =>
         majlesService.getMajales().then( (majlales) =>
             dispatch({
                 type   : GET_MAJALES,
                 payload: majlales
             })
         );

}

export function getMajlesbyId(id)
{
     return (dispatch) =>
         majlesService.getMajlesById(id).then( (majles) =>
             dispatch({
                 type   : GET_MAJALES,
                 payload: majles
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

