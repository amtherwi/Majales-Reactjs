import axios from 'axios';
import FuseUtils from '@fuse/FuseUtils';

class majlestyepeService extends FuseUtils.EventEmitter {

    getMajlesTypeById = (id) => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:21021/api/services/app/MajlesTypes/GetMajlesTypesById',{
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

    getMajleType = () => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:21021/api/services/app/MajlesType/GetAll')
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

    createMajlesType = (majlestype) => {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:21021/api/services/app/MajlesTypes/Create', majlestype)
                .then(response => {
                    if ( response.data.success )
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

    updateMajlesType = (majlestype) => {
        return new Promise((resolve, reject) => {
            axios.put('http://localhost:21021/api/services/app/MajlesTypes/Update', {
                majlestype: majlestype
                })
                .then(response => {
                    if ( response.data.success )
                    {
                        resolve("Majles was successfully updated !! ");
                    }
                    else
                    {
                        reject(response.data.error);
                    }
                });
        });
    };

    deleteMajlesType = (id) => {
        return new Promise((resolve, reject) => {
            axios.put('http://localhost:21021/api/services/app/MajlesTypes/Delete', { 
                params: {   
                    id
                }})
                .then(response => {
                    if ( response.data.success )
                    {
                        resolve("Majles was successfully deleted !! ");
                    }
                    else
                    {
                        reject(response.data.error);
                    }
                });
        });
    };
}

const instance = new majlestyepeService();

export default instance;
