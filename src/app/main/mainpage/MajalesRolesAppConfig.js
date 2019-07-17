import React from 'react';
import {authRoles} from 'app/auth';

export const MajalesRolesAppConfig = {
    settings: {
        layout: {}
    },
    auth    : authRoles.user,
    routes  : [

        {
            path     : '/majalesroles',
            component: React.lazy(() => import('./majalesroles/majalesroles'))
        }
    ]
};
