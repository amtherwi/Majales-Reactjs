import React from 'react';
import {authRoles} from 'app/auth';

export const MajalesRolesAppConfig = {
    settings: {
        layout: {}
    },
    auth    : authRoles.user,
    routes  : [
        {
            path     : '/majalesroles/thread/:threadId/view',
            component: React.lazy(() => import('./thread/Thread'))
        },
        {
            path     : '/majalesroles/meeting/:majalesroleType/:meetingid/view',
            component: React.lazy(() => import('./meetings/meeting/Meeting'))
        },
        {
            path     : '/majalesroles/meeting/:majalesroleType',
            component: React.lazy(() => import('./meetings/meetings'))
        },
        {
            path     : '/majalesroles',
            component: React.lazy(() => import('./majalesroles/majalesroles'))
        }
    ]
};
