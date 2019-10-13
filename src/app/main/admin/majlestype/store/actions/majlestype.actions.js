import  majlestypeService  from 'app/services/majlestypeService'


export const GET_MAJLESTYPE = '[MAJLESTYPE APP] GET MAJLESTYPE';
export const SET_MAJALES_SEARCH_TEXT = '[MAJALES APP] SET MAJALES SEARCH TEXT';

export function getMajlesTypes()
{

     return (dispatch) =>
     majlestypeService.getMajleType().then( (majlestype) =>
             dispatch({
                 type   : GET_MAJLESTYPE,
                 payload: majlestype
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

