import  classificationService  from 'app/services/classificationService'
import {showMessage} from 'app/store/actions/fuse';
import {getMajlesType} from './majlestype.actions'
import { getMajlesTypes } from './majlestypes.actions'
export const GET_CLASSIFICATION = '[CLASSIFICATION APP] GET CLASSIFICATION';
export const SAVE_CLASSIFICATION ='[CLASSIFICATION APP] SAVE CLASSIFICATION';

export function getCalssification(params)
{

     return (dispatch) =>
     classificationService.getClassifyByMajlesType(params)
        .then((classification) =>
             dispatch({
                 type   : GET_CLASSIFICATION,
                 payload: classification
             })
         );

}
export function saveClassification(data,cId) {
  
    //if(cId === 'new')
    //{
        console.log('data in actionSave,',data)
        console.log('form in majlesTypdId,',cId)
     
        return (dispatch) => {
            classificationService.createClassification(data)
                .then((classification) => 
                {
                    dispatch(showMessage({message: 'تم حفظ قيم التصنيف  بنجاح'}))
                    return dispatch({
                        type   : SAVE_CLASSIFICATION,
                        payload: classification
                    });          
                }
            )
            .catch( err =>{dispatch(showMessage({message: 'لم يتم الحفظ'})); });
     
            }
        
    //}

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
         )
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