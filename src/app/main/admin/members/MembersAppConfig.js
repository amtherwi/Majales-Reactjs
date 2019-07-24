import React from 'react';
import {Redirect} from 'react-router-dom';

export const MembersAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/admin/members/:id',
            component: React.lazy(() => import('./MembersApp'))
        },
        {
            path     : '/admin/members',
            component: () => <Redirect to="/admin/members/all"/>
        }
    ]
};
