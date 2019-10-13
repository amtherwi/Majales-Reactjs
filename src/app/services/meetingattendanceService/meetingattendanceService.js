import axios from 'axios';
import FuseUtils from '@fuse/FuseUtils';

class meetingattendanceService extends FuseUtils.EventEmitter {

    getMeetingattendanceById = (id) => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:21021/api/services/app/Meetingattendance/GetMeetingattendancesById',{
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

    getMeetingattendance = () => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:21021/api/services/app/Meetingattendance/GetAll')
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

    createMeetingattendance = (meetingattendance) => {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:21021/api/services/app/Meetingattendance/Create', meetingattendance)
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

    updateMeetingattendance = (meetingattendance) => {
        return new Promise((resolve, reject) => {
            axios.put('http://localhost:21021/api/services/app/Meetingattendance/Update', {
                meetingattendance: meetingattendance
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

    deleteMeetingattendance = (id) => {
        return new Promise((resolve, reject) => {
            axios.put('http://localhost:21021/api/services/app/Meetingattendance/Delete', { 
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

const instance = new meetingattendanceService();

export default instance;
