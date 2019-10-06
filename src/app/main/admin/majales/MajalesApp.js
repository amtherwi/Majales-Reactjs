import React , {useEffect, useRef, useState}from 'react';
import {FusePageCarded} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';


import withReducer from 'app/store/withReducer';
import * as Actions from './store/actions'
import reducer from './store/reducers';

import MajalesTable from './components/MajalesTable';
import MajalesHeader from './components/MajalesHeader';


function MajalesApp()
{
    const dispatch = useDispatch();
    const majales = useSelector(({majalesApp}) => majalesApp.majales);

    useEffect(() => {
        dispatch(Actions.getMajales());
    }, [dispatch]);

    if ( !majales )
    {
        return null;
    }else{
        console.log(majales);
    }

    return (
        <FusePageCarded
            classes={{
                content: "flex",
                header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
            }}
            header={
                <MajalesHeader/>
            }
            content={
                <MajalesTable/>
            }
            innerScroll
        />
    );
}

export default withReducer('majalesApp', reducer)(MajalesApp);
