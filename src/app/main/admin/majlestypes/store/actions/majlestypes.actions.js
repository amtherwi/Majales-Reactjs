import  majlestypeService  from 'app/services/majlestypeService'
import {showMessage} from 'app/store/actions/fuse';
import {FuseUtils} from '@fuse';
export const SAVE_MAJLESTYPE = '[MAJLESTYPE APP] SAVE MAJLESTYPE';
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




export function saveMajlesType(data)
{
    // const request = axios.post('/api/e-commerce-app/product/save', data);

    return (dispatch) =>
    majlestypeService.createMajlesType(data).then((majlestype) => 
            {
                dispatch(showMessage({message: 'تم الحفظ بنجاح'}));
                return dispatch({
                    type   : SAVE_MAJLESTYPE,
                    payload: majlestype
                })
            }
        )
        .catch( err =>{dispatch(showMessage({message: 'لم يتم الحفظ'})); })
}

export function newMajlesType()
{
    const data = {
        // id              : FuseUtils.generateGUID(),
        majlesType      : '',
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
        type   : GET_MAJLESTYPES,
        payload: data
    }
}

