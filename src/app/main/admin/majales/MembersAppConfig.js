import React from 'react';
import {Redirect} from 'react-router-dom';

export const MajalesAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/admin/majales/:id',
            component: React.lazy(() => import('./MembersApp'))
        },
        {
            path     : '/admin/majales',
            component: () => <Redirect to="/admin/majales/all"/>
        }
    ]
};
