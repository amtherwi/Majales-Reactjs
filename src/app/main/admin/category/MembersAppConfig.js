import React from 'react';
import {Redirect} from 'react-router-dom';

export const CategoryAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/admin/category/:id',
            component: React.lazy(() => import('./MembersApp'))
        },
        {
            path     : '/admin/category',
            component: () => <Redirect to="/admin/category/all"/>
        }
    ]
};
