import  majlesService  from 'app/services/majlesService'
import  majlestypeService  from 'app/services/majlestypeService';

export const GET_MAJALES = '[MAJALES APP] GET MAJALES';
export const GET_MAJLESTYPES = '[MAJLESTYPES APP] GET MAJLESTYPES';
export const SET_MAJALES_SEARCH_TEXT = '[MAJALES APP] SET MAJALES SEARCH TEXT';
export const OPEN_NEW_MAJLES_DIALOG = '[MAJALES APP] OPEN NEW MAJALES DIALOG';
export const CLOSE_NEW_MAJLES_DIALOG = '[MAJALES APP] CLOSE NEW MAJALES DIALOG';
export const OPEN_EDIT_MAJLES_DIALOG = '[MAJALES APP] OPEN EDIT MAJALES DIALOG';
export const CLOSE_EDIT_MAJLES_DIALOG = '[MAJALES APP] CLOSE EDIT MAJALES DIALOG';
export const ADD_MAJLES = '[MAJALES APP] ADD MAJALES';
export const UPDATE_MAJLES = '[MAJALES APP] UPDATE MAJALES';
export const REMOVE_MAJLES = '[MAJALES APP] REMOVE MAJALES';



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

export function openNewMajlesDialog()
{
    return {
        type: OPEN_NEW_MAJLES_DIALOG
    }
}

export function closeNewMajlesDialog()
{
    return {
        type: CLOSE_NEW_MAJLES_DIALOG
    }
}

export function openEditMajlesDialog(data)
{
    return {
        type: OPEN_EDIT_MAJLES_DIALOG,
        data
    }
}

export function closeEditMajlesDialog()
{
    return {
        type: CLOSE_EDIT_MAJLES_DIALOG
    }
}


export function addMajles(majles)
{
    return (dispatch) => {
        return majlesService.createMajles(majles).then((response) =>
            Promise.all([
                dispatch({
                    type: ADD_MAJLES
                })
            ]).then(() => dispatch(getMajales()))
        );
    };
}

export function updateMajles(majles)
{
    return (dispatch) => {
        return majlesService.updateMajles(majles).then((response) =>
            Promise.all([
                dispatch({
                    type: UPDATE_MAJLES
                })
            ]).then(() => dispatch(getMajales()))
        );
    };
}

export function removeMajles(majlesId)
{
    return (dispatch) => {
        return majlesService.deleteMajles(majlesId).then((response) =>
            Promise.all([
                dispatch({
                    type: REMOVE_MAJLES
                })
            ]).then(() => dispatch(getMajales()))
        );
    };
}

