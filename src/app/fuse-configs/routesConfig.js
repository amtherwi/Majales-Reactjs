import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import {LoginConfig} from 'app/main/login/LoginConfig';
import {ExampleConfig} from 'app/main/example/ExampleConfig';

const routeConfigs = [
    LoginConfig,
    ExampleConfig
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/example"/>
    }
];

export default routes;
