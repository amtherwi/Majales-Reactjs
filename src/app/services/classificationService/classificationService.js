import axios from 'axios';
import FuseUtils from '@fuse/FuseUtils';

class classificationService extends FuseUtils.EventEmitter {

    getClassifyByMajlesType = (id) => {
       
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:21021/api/services/app/Classification/GetClassificationByMajlesTypeId',{
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
            })
             
        });
   
    };

    getClassificationById = (id) => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:21021/api/services/app/Classification/GetClassificationsById',{
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

    getClassifications = () => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:21021/api/services/app/Classification/GetAll')
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
    // createMajlesType = (majlestype) => {
    //     return new Promise((resolve, reject) => {
    //         axios.post('http://localhost:21021/api/services/app/MajlesType/Create', majlestype)
    //             .then(response => {
    //                 if ( response.data.success )
    //                 {
    //                     resolve(response.data.result);
    //                 }
    //                 else
    //                 {
    //                     reject(response.data.error);
    //                 }
    //             });
    //     });
    // };

    createClassification = (classification) => {
        
        
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:21021/api/services/app/Classification/Create', classification)
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

    updateClassification = (classification) => {
        return new Promise((resolve, reject) => {
            axios.put('http://localhost:21021/api/services/app/Classification/Update', classification)
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

    deleteClassification = (id) => {
        return new Promise((resolve, reject) => {
            axios.delete('http://localhost:21021/api/services/app/Classification/Delete', { 
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

const instance = new classificationService();

export default instance;
