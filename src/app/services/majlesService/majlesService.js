import axios from 'axios';
import FuseUtils from '@fuse/FuseUtils';

class majlesService extends FuseUtils.EventEmitter {

    getMajlesById = (id) => {
        return new Promise((resolve, reject) => {
            axios.get('/api/services/app/Majles/GetMajlesById',{
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
    getMajales = () => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:21021/api/services/app/Majles/GetAll', )
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
    }
}

const instance = new majlesService();

export default instance;
