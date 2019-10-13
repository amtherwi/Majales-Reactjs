import React , {useEffect, useRef, useState}from 'react';
import {FusePageCarded} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';


import withReducer from 'app/store/withReducer';
import * as Actions from './store/actions'
import reducer from './store/reducers';

import MajlesTypeTable from './components/MajlesTypeTable';
import MajlesTypeHeader from './components/MajlesTypeHeader';
import MajlesTypeTest from './components/MajlesTypeTest'

function MajlesTypeApp()
{
    const dispatch = useDispatch();
    const majlestype = useSelector(({majlestypeApp}) => majlestypeApp.majlestype);

    useEffect(() => {
        dispatch(Actions.getMajlesTypes());
    }, [dispatch]);

    if ( !majlestype )
    {
        return null;
    }else{
        console.log('majlesTypes is: ',majlestype);
    }

    return (
        <FusePageCarded
            classes={{
                content: "flex",
                header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
            }}
            header={
                <MajlesTypeHeader/>
            }
            content={
                <MajlesTypeTest/>
            }
            innerScroll
        />
    );
}

export default withReducer('majlestypeApp', reducer)(MajlesTypeApp);
