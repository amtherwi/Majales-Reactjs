import  classificationService  from 'app/services/classificationService'
import {showMessage} from 'app/store/actions/fuse';
import { collapsedExpansion } from './majlestypes.actions'
export const GET_CLASSIFICATION = '[CLASSIFICATION APP] GET CLASSIFICATION';
export const SAVE_CLASSIFICATION ='[CLASSIFICATION APP] SAVE CLASSIFICATION';

export const OPEN_NEW_CLASSIFICATION_DIALOG = '[CLASSIFICATION APP] OPEN NEW CLASSIFICATION DIALOG';
export const CLOSE_NEW_CLASSIFICATION_DIALOG = '[CLASSIFICATION APP] CLOSE NEW CLASSIFICATION DIALOG';
export const OPEN_EDIT_CLASSIFICATION_DIALOG = '[CLASSIFICATION APP] OPEN EDIT CLASSIFICATION DIALOG';
export const CLOSE_EDIT_CLASSIFICATION_DIALOG = '[CLASSIFICATION APP] CLOSE EDIT CLASSIFICATION DIALOG';

export function getCalssification(params)
{

     return (dispatch) =>
     classificationService.getClassifyByMajlesType(params)
        .then((classification) =>{
            if(classification){
             dispatch({
                 type   : GET_CLASSIFICATION,
                 payload: classification
             })
            }
        })
       .catch( error => {dispatch(showMessage({message: 'No Classification'}))});
}

export function deleteClassification(params)
{
    return (dispatch) =>
     classificationService.deleteClassification(params)
     .then( (deleted) =>{
            if(deleted){
                dispatch(showMessage({message: ' تم الحذف بنجاح '}))
            }
        }  
         ).then(dispatch(collapsedExpansion()))
         .catch( err =>{dispatch(showMessage({message: 'لم يتم الحذف'})); });
}
export function newClassification()
{
    const data = {
        
        majlesTypeId    : 0,
        ceO_inCost      : 0,
        ceO_outCost     : 0,
        sec_inCost      : 0,
        sec_outCost     : 0, 
        mSec_inCost     : 0,   
        mSec_outCost    : 0,
        mem_inCost      : 0,
        mem_outCost     : 0,
        
    };

    return {
        type   : GET_CLASSIFICATION,
        payload: data
    }
}
export function addClassification(data)
{
  
     return (dispatch) => {
        classificationService.createClassification(data)
            .then((classification) => 
            {
                dispatch(showMessage({message: 'تم إضافة نوع المجلس بنجاح'}))
                return dispatch({
                    type   : SAVE_CLASSIFICATION,
                     payload: classification
                });          
            }
        ).then(() => dispatch(getCalssification(data.majlesTypeId)))
        .catch( err =>{dispatch(showMessage({message: 'لم يتم الإضافة'})); }); 
    }

}

export function updateClassifiaction(data)
{
  
     return (dispatch) => {
        classificationService.updateClassification(data)
            .then((classification) => 
            {
                dispatch(showMessage({message: 'تم حفظ التعديل بنجاح'}))
                return dispatch({
                    type   : SAVE_CLASSIFICATION,
                     payload: classification
                });          
            }
        ).then(() => dispatch(getCalssification(data.majlesTypeId)))
        .catch( err =>{dispatch(showMessage({message: 'لم يتم الحفظ'})); }); 
    }

}

export function openNewClassificationDialog()
{
    return {
        type: OPEN_NEW_CLASSIFICATION_DIALOG
    }
}

export function closeNewClassificationDialog()
{
    return {
        type: CLOSE_NEW_CLASSIFICATION_DIALOG
    }
}
export function openEditClassificationDialog(data)
{
    return {
        type: OPEN_EDIT_CLASSIFICATION_DIALOG,
        data
    }
}

export function closeEditClassificationDialog()
{
    return {
        type: CLOSE_EDIT_CLASSIFICATION_DIALOG
    }
}
