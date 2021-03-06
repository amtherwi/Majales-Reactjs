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
        // {
        //     path     : '/admin/majlestypes/:id/:type?',
        //     component: React.lazy(() => import('./components/MajlesTypeDialog'))
        // },
        // {
        //     path     : '/admin/majlestypes/classifications',
        //     component: React.lazy(() => import('./majlestype/Classification'))
        // },
        {
            path     : '/admin/majlestypes',
            component: React.lazy(() => import('./MajlesTypesApp'))
        },
        {
            path     : '/admin/majlestypes/:id',
            component: React.lazy(() => import('./MajlesTypesApp'))
        },
        // {
        //     path     : '/admin/majlestypes/new',
        //     component: React.lazy(() => import('./components/MajlesTypeDialog'))
        // },
        
        // {
        //     path     : '/admin/majlestypes/',
        //     component: () => <Redirect to="/admin/majlestypes/all"/>
        // }

        
    ]
};
