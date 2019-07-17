import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import {LoginConfig} from 'app/main/login/LoginConfig';
import {MajalesRolesAppConfig} from 'app/main/mainpage/MajalesRolesAppConfig';

const routeConfigs = [
    LoginConfig,
    MajalesRolesAppConfig
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/majalesroles"/>
    }
];

export default routes;
