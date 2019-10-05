import React from 'react';
import {Redirect} from 'react-router-dom';
export const BoardsAppConfig = {
    settings: {
        layout: {}
    },
    routes  : [
        {
            path     : '/admin/boards/:id',
            component: React.lazy(() => import('./BoardsApp'))
        },
        {
            path     : '/admin/boards',
            component: () => <Redirect to="/admin/boards/all"/>
        }
    ]
};
