import  classificationService  from 'app/services/classificationService'
// import {showMessage} from 'app/store/actions/fuse';
// import {FuseUtils} from '@fuse';
export const GET_CLASSIFICATION = '[CLASSIFICATION APP] GET CLASSIFICATION';

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

