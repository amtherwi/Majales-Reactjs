import  majlestypeService  from 'app/services/majlestypeService'
import {showMessage} from 'app/store/actions/fuse';
export const GET_MAJLESTYPES = '[MAJLESTYPES APP] GET MAJLESTYPES';
export const SET_MAJALES_SEARCH_TEXT = '[MAJLESTYPES APP] SET MAJLESTYPES SEARCH TEXT';
export const DELETE_MAJLESTYPE     = '[MAJLESTYPES APP] DELETE MAJLESTYPE';
export const SAVE_MAJLESTYPE = '[MAJLESTYPES APP] SAVE MAJLESTYPE';

export const OPEN_NEW_MAJLESTYPE_DIALOG = '[MAJLESTYPES APP] OPEN NEW MAJLESTYPE DIALOG';
export const CLOSE_NEW_MAJLESTYPE_DIALOG = '[MAJLESTYPES APP] CLOSE NEW MAJLESTYPE DIALOG';

export const OPEN_EDIT_MAJLESTYPE_DIALOG = '[MAJLESTYPES APP] OPEN EDIT MAJLESTYPE DIALOG';
export const CLOSE_EDIT_MAJLESTYPE_DIALOG = '[MAJLESTYPES APP] CLOSE EDIT MAJLESTYPE DIALOG';

export const OPEN_ALERT_DIALOG = '[MAJLESTYPES APP] OPEN ALERT DIALOG';
export const CLOSE_ALERT_DIALOG = '[MAJLESTYPES APP] CLOSE ALERT DIALOG';

export const EXPANDED_EXPANSION   = '[MAJLESTYPES APP] EXPANDED EXPANSION';
export const COLLAPSED_EXPANSION   = '[MAJLESTYPES APP] COLLAPSED EXPANSION';


export function getMajlesTypes()
{

     return (dispatch) =>
     majlestypeService.getMajlesTypes().then( (majlestypes) =>
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

export function deleteMajlesType(params)
{
    return (dispatch) =>
     majlestypeService.deleteMajlesType(params)
     .then( (deleted) =>{
            if(deleted){
                dispatch(showMessage({message: ' تم الحذف بنجاح '}))
            }
        }  
         ).then(() => dispatch(getMajlesTypes()))
         .catch( err =>{dispatch(showMessage({message: 'لم يتم الحذف'})); });
}

export function addMajlesType(data)
{
  
     return (dispatch) => {
     majlestypeService.createMajlesType(data)
            .then((majlestype) => 
            {
                dispatch(showMessage({message: 'تم إضافة نوع المجلس بنجاح'}))
                return dispatch({
                    type   : SAVE_MAJLESTYPE,
                     payload: majlestype
                });          
            }
        ).then(() => {
            
            dispatch(getMajlesTypes())
            })

        .catch( err =>{dispatch(showMessage({message: 'لم يتم الإضافة'})); }); 
    }

}

export function updateMajlestype(data)
{
  
     return (dispatch) => {
     majlestypeService.updateMajlesType(data)
            .then((majlestype) => 
            {
                dispatch(showMessage({message: 'تم حفظ نوع المجلس بنجاح'}))
                return dispatch({
                    type   : SAVE_MAJLESTYPE,
                     payload: majlestype
                });          
            }
        ).then(() => dispatch(getMajlesTypes()))
        .catch( err =>{dispatch(showMessage({message: 'لم يتم الحفظ'})); }); 
    }

}

export function openNewMajlestypeDialog()
{
    return {
        type: OPEN_NEW_MAJLESTYPE_DIALOG
    }
}

export function closeNewMajlestypeDialog()
{
    return {
        type: CLOSE_NEW_MAJLESTYPE_DIALOG
    }
}
export function openEditMajlestypeDialog(data)
{
    return {
        type: OPEN_EDIT_MAJLESTYPE_DIALOG,
        data
    }
}

export function closeEditMajlestypeDialog()
{
    return {
        type: CLOSE_EDIT_MAJLESTYPE_DIALOG
    }
}

export function openAlertDialog(data)
{
    return {
        type: OPEN_ALERT_DIALOG,
        data
    }
}

export function closeAlertDialog()
{
    return {
        type: CLOSE_ALERT_DIALOG
    }
}

export function toggoleExpansion(data)
{
    return {
        type: EXPANDED_EXPANSION,
        data
    }
}

export function collapsedExpansion()
{
    return {
        type: COLLAPSED_EXPANSION
    }
}


