import axios from 'axios';
import FuseUtils from '@fuse/FuseUtils';

class majlestyepeService extends FuseUtils.EventEmitter {

    getMajlesTypeById = (id) => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:21021/api/services/app/MajlesType/GetMajlesTypesById',{
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
    getMajlesTypeByType = (Type) => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:21021/api/services/app/MajlesType/GetMajlesTypesByType',{
                params: {
                    Type
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
            axios.post('http://localhost:21021/api/services/app/MajlesType/Create', majlestype)
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
            axios.put('http://localhost:21021/api/services/app/MajlesType/Update', {
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
            axios.delete('http://localhost:21021/api/services/app/MajlesType/Delete', { 
                params: {   
                    id
                }})
                .then(response => {
                    if ( response.data.success )
                    {
                        resolve(true);
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
