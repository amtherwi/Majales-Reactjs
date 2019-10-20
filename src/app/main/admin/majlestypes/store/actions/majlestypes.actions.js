import  majlestypeService  from 'app/services/majlestypeService'
import classificationService from 'app/services/classificationService'
// import {showMessage} from 'app/store/actions/fuse';
// import {FuseUtils} from '@fuse';
export const GET_MAJLESTYPES = '[MAJLESTYPES APP] GET MAJLESTYPES';
export const SET_MAJALES_SEARCH_TEXT = '[MAJALES APP] SET MAJALES SEARCH TEXT';

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

export function getMajlesTypeById(params)
{
    return (dispatch) =>
     majlestypeService.getMajlesTypeById(params).then( (majlestypes) =>
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





    
    // return (dispatch) =>
    // majlestypeService.createMajlesType(data).then((majlestype) => 
    //         {
    //             dispatch(showMessage({message: 'تم الحفظ بنجاح'}));
    //             return dispatch({
    //                 type   : SAVE_MAJLESTYPE,
    //                 payload: majlestype
    //             })
    //         }
    //     )
    //     .catch( err =>{dispatch(showMessage({message: 'لم يتم الحفظ'})); })




