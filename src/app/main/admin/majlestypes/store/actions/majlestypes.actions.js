import  majlestypeService  from 'app/services/majlestypeService'
import classificationService from 'app/services/classificationService'
// import {showMessage} from 'app/store/actions/fuse';
// import {FuseUtils} from '@fuse';
export const GET_MAJLESTYPES = '[MAJLESTYPES APP] GET MAJLESTYPES';
export const SET_MAJALES_SEARCH_TEXT = '[MAJALES APP] SET MAJALES SEARCH TEXT';
export const OPEN_NEW_MAJLESTYPE_DIALOG = '[MAJLESTYPE APP] OPEN NEW MAJLESTYPE DIALOG';
export const CLOSE_NEW_MAJLESTYPE_DIALOG = '[MAJLESTYPE APP] CLOSE NEW MAJLESTYPE DIALOG';
export const OPEN_EDIT_MAJLESTYPE_DIALOG = '[MAJLESTYPE APP] OPEN EDIT MAJLESTYPE DIALOG';
export const CLOSE_EDIT_MAJLESTYPE_DIALOG = '[MAJLESTYPE APP] CLOSE EDIT MAJLESTYPE DIALOG';

export function getMajlesTypes()
{

     return (dispatch) =>
     majlestypeService.getMajleType().then( (majlestypes) =>
             dispatch({
                 type   : GET_MAJLESTYPES,
                 payload: majlestypes
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



