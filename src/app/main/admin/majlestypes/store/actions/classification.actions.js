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
export function saveClassification(data,Id) {
  
    if(Id === 'new')
    {
        console.log('data in actionSave,',data)
        console.log('form in majlesTypdId,',Id)
     
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
        
    }

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
        CEO_inCost      : 0,
        CEO_outCost     : 0,
        Sec_inCost      : 0,
        Sec_outCost     : 0, 
        MSec_inCost     : 0,   
        MSec_outCost    : 0,
        Mem_inCost      : 0,
        Mem_outCost     : 0,
        
    };

    return {
        type   : GET_CLASSIFICATION,
        payload: data
    }
}