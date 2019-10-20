import  classificationService  from 'app/services/classificationService'
import  majlestypeService  from 'app/services/majlestypeService'
import {showMessage} from 'app/store/actions/fuse';
import {FuseUtils} from '@fuse';
export const GET_CLASSIFICATION = '[CLASSIFICATION APP] GET CLASSIFICATION';
export const GET_MAJLESTYPE     = '[MAJLESTYPES APP] GET MAJLESTYPES';
export const SAVE_MAJLESTYPE = '[MAJLESTYPE APP] SAVE MAJLESTYPE';

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
export function saveMajlesType(data, majlesTypeId)
{
    // const request = axios.post('/api/e-commerce-app/product/save', data);
    let majleTypeObj = {
        type: data.majlesType
    }
    let typeCalssification = {
        majlesTypeId      : majlesTypeId,
        CEO_inCost      : data.CEO_inCost,
        CEO_outCost     : data.CEO_outCost,
        Sec_inCost      : data.Sec_inCost,
        Sec_outCost     : data.Sec_outCost, 
        MSec_inCost     : data.MSec_inCost,   
        MSec_outCost    : data.MSec_outCost,
        Mem_incost      : data.Mem_incost,
        Mem_outCost     : data.Mem_outCost,
    }
    console.log("majlesType", majleTypeObj)
    console.log("TypeClassification", typeCalssification)

    if(majlesTypeId === 'new')
    {
    console.log("inside majlesType", majleTypeObj)
    console.log("inside TypeClassification", typeCalssification)
     return (dispatch) =>  
     majlestypeService.createMajlesType(majleTypeObj)
            .then((majlestype) => 
            {
                // classificationService.createClassification(typeCalssification)
                // .then((classification) => {
                //     dispatch(showMessage({message: 'تم الحفظ بنجاح'}))
                // })
                dispatch(showMessage({message: 'تم الحفظ بنجاح'}))
                return dispatch({
                    type   : SAVE_MAJLESTYPE,
                    payload: majlestype
                });
                 
            }
        )
        .catch( err =>{dispatch(showMessage({message: 'لم يتم الحفظ'})); })
    }
}

export function newMajlesType()
{
    const data = {
        id              : FuseUtils.generateGUID(),
        majlesType     : '',
        CEO_inCost      : 0,
        CEO_outCost     : 0,
        Sec_inCost      : 0,
        Sec_outCost     : 0, 
        MSec_inCost     : 0,   
        MSec_outCost    : 0,
        Mem_incost      : 0,
        Mem_outCost     : 0,
        
    };

    return {
        type   : GET_MAJLESTYPE,
        payload: data
    }
}