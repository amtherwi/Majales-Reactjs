import jwtService from 'app/services/jwtService';
import userService from 'app/services/userService';
import {setUserData} from './user.actions';
import * as Actions from 'app/store/actions';

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function submitLogin({email, password})
{
    return (dispatch) =>
        jwtService.signInWithEmailAndPassword(email, password)
            .then((userId) => {

                userService.getUser(userId)
                    .then((user) => {
                        dispatch(setUserData(user));

                        return dispatch({
                            type: LOGIN_SUCCESS
                        });
                        }
                    )
                    .catch(error => {
                        return dispatch({
                            type   : LOGIN_ERROR,
                            payload: error
                        });
                    });


                }
            )
            .catch(error => {
                return dispatch({
                    type   : LOGIN_ERROR,
                    payload: error
                });
            });
}


