import axios from 'axios';
import FuseUtils from '@fuse/FuseUtils';

class majlismembershipService extends FuseUtils.EventEmitter {

    getMajlismembershipById = (id) => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:21021/api/services/app/Majlismembership/GetMajlismembershipsById',{
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

    getMajlismembership = () => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:21021/api/services/app/Majlismembership/GetAll')
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

    createMajlismembership = (majlismembership) => {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:21021/api/services/app/Majlismembership/Create', majlismembership)
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

    updateMajlismembership = (majlismembership) => {
        return new Promise((resolve, reject) => {
            axios.put('http://localhost:21021/api/services/app/majlismembership/Update', {
                majlismembership: majlismembership
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

    deleteMajlismembership = (id) => {
        return new Promise((resolve, reject) => {
            axios.put('http://localhost:21021/api/services/app/Majlismembership/Delete', { 
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

const instance = new majlismembershipService();

export default instance;
