import axios from 'axios';
import FuseUtils from '@fuse/FuseUtils';

class commentService extends FuseUtils.EventEmitter {

    getCommentById = (id) => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:21021/api/services/app/Comment/GetCommentsById',{
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

    getComment = () => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:21021/api/services/app/Comment/GetAll')
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

    createComment = (comment) => {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:21021/api/services/app/Comment/Create', comment)
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

    updateComment = (comment) => {
        return new Promise((resolve, reject) => {
            axios.put('http://localhost:21021/api/services/app/Comment/Update', {
                comment: comment
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

    deleteComment = (id) => {
        return new Promise((resolve, reject) => {
            axios.put('http://localhost:21021/api/services/app/Comment/Delete', { 
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

const instance = new commentService();

export default instance;
