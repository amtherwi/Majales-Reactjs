import axios from 'axios';
import FuseUtils from '@fuse/FuseUtils';

class userService extends FuseUtils.EventEmitter {

    getUser = (id) => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:21021/api/services/app/User/Get',{
                params: {
                    id
                }
            })
                .then(response => {
                    if ( response.data.success)
                    {
                        resolve(response.data.result);
                    }
                    else
                    {
                        reject(response.data.error);
                    }
                });
        });
    };
}

const instance = new userService();

export default instance;
