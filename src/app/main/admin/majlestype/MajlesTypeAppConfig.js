import React from 'react';
import {Redirect} from 'react-router-dom';

export const MajlesTypeAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/admin/majlestype/:id',
            component: React.lazy(() => import('./MajlesTypeApp'))
        },
        {
            path     : '/admin/majlestype',
            component: () => <Redirect to="/admin/majlestype/all"/>
        }
    ]
};
