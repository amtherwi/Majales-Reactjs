import axios from 'axios';
import {FuseUtils} from '@fuse';
import {showMessage} from 'app/store/actions/fuse';

export const GET_BOARD = '[BOARD APP] GET BOARD';
export const SAVE_BOARD = '[BOARD APP] SAVE BOARD';

export function getBoard(params)
{
    const request = axios.get('http://localhost:4000/boards', {params});

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_BOARD,
                payload: response.data
            })
        );
}

export function saveProduct(data)
{
    const request = axios.post('http://localhost:4000/boards', data);

    return (dispatch) =>
        request.then((response) => {

                dispatch(showMessage({message: 'Product Saved'}));

                return dispatch({
                    type   : SAVE_BOARD,
                    payload: response.data
                })
            }
        ).catch(err => err.message);
}

export function newBoard()
{
    const data = {
        id  : FuseUtils.generateGUID(),
        name: '',
        type: '',
        discription: '',
        owner: '',
        date: '',
        active : true
    };

    return {
        type   : GET_BOARD,
        payload: data
    }
}
