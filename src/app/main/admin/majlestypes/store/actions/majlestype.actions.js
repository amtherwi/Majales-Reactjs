import  majlestypeService  from 'app/services/majlestypeService'
import { getMajlesTypes } from './majlestypes.actions'
import {showMessage} from 'app/store/actions/fuse';
import {FuseUtils} from '@fuse';
import {saveClassification} from './classification.actions'

export const GET_MAJLESTYPE     = '[MAJLESTYPES APP] GET MAJLESTYPE';
export const SAVE_MAJLESTYPE = '[MAJLESTYPES APP] SAVE MAJLESTYPE';
export const DELETE_MAJLESTYPE     = '[MAJLESTYPES APP] DELETE MAJLESTYPE';

export function getMajlesTypeById(params)
{
    return (dispatch) =>
     majlestypeService.getMajlesTypeById(params).then( (majlestype) =>
             dispatch({
                 type   : GET_MAJLESTYPE,
                 payload: majlestype
             })
         );
}

export function getMajlesType(params)
{
    return (dispatch) =>
     majlestypeService.getMajlesTypeByType(params)
     .then((majlestype) =>
     {
        return dispatch({
                 type   : GET_MAJLESTYPE,
                 payload: majlestype
             })
    });
            
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

export function saveMajlesType(data,majlesTypeId)
{
  
    if(majlesTypeId === 'new')
    {
     return (dispatch) => {
     majlestypeService.createMajlesType(data)
            .then((majlestype) => 
            {
                dispatch(showMessage({message: 'تم حفظ نوع المجلس بنجاح'}))
                return dispatch({
                    type   : SAVE_MAJLESTYPE,
                     payload: majlestype
                });          
            }
        )
        .catch( err =>{dispatch(showMessage({message: 'لم يتم الحفظ'})); });
        
        
        }
    }
}
// .then(() => dispatch(getContacts(routeParams)))
export function newMajlesType()
{
    const data = {
       // id  : FuseUtils.generateGUID(),
        type: ''   
    };

    return {
        type   : GET_MAJLESTYPE,
        payload: data
    }
}
