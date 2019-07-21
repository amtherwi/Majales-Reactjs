import React from 'react';
import {authRoles} from 'app/auth';

export const MajalesRolesAppConfig = {
    settings: {
        layout: {}
    },
    auth    : authRoles.user,
    routes  : [
        {
            path     : '/majalesroles/thread/:threadId',
            component: React.lazy(() => import('./thread/Thread'))
        },
        {
            path     : '/majalesroles/:majalesroleType/:meetingid/view',
            component: React.lazy(() => import('./meetings/meeting/Meeting'))
        },
        {
            path     : '/majalesroles/:majalesroleType',
            component: React.lazy(() => import('./meetings/meetings'))
        },
        {
            path     : '/majalesroles',
            component: React.lazy(() => import('./majalesroles/majalesroles'))
        }
    ]
};
