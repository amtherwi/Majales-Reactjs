import axios from 'axios';
import FuseUtils from '@fuse/FuseUtils';

class attachmentService extends FuseUtils.EventEmitter {

    getAttachmentById = (id) => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:21021/api/services/app/Attachment/GetAttachmentsById',{
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

    getAttachment = () => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:21021/api/services/app/Attachment/GetAll')
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

    createAttachment = (attachment) => {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:21021/api/services/app/Attachment/Create', attachment)
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

    updateAttachment = (attachment) => {
        return new Promise((resolve, reject) => {
            axios.put('http://localhost:21021/api/services/app/Attachment/Update', {
                attachment: attachment
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

    deleteAttachment = (id) => {
        return new Promise((resolve, reject) => {
            axios.put('http://localhost:21021/api/services/app/Attachment/Delete', { 
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

const instance = new attachmentService();

export default instance;
