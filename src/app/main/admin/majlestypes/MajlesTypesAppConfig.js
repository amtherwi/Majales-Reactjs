import React from 'react';
import {Redirect} from 'react-router-dom';
import {authRoles} from 'app/auth';

export const MajlesTypesAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth    : authRoles.user,
    routes  : [
        {
            path     : '/admin/majlestypes/:id/:type?',
            component: React.lazy(() => import('./majlestype/MajlesType'))
        },
        {
            path     : '/admin/majlestypes',
            component: React.lazy(() => import('./MajlesTypesApp'))
        },
        {
            path     : '/admin/majlestypes/:id',
            component: React.lazy(() => import('./MajlesTypesApp'))
        },
        // {
        //     path     : '/admin/majlestypes/',
        //     component: () => <Redirect to="/admin/majlestypes/all"/>
        // }
        
    ]
};
