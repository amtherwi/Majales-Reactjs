import React , {useEffect, useRef, useState}from 'react';
import {FusePageCarded} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';


import withReducer from 'app/store/withReducer';
import * as Actions from './store/actions'
import reducer from './store/reducers';

// import MajlesTypeTable from './components/MajlesTypeTable';
import MajlesTypesHeader from './components/MajlesTypesHeader';
import MajlesTypes from './components/MajlesTypes'
import NewMajlesType from './components/NewMajlesType';

function MajlesTypesApp()
{
    const dispatch = useDispatch();
    const majlestypes = useSelector(({majlestypesApp}) => majlestypesApp.majlestypes);

    useEffect(() => {
        dispatch(Actions.getMajlesTypes());
    }, [dispatch]);

    if ( !majlestypes )
    {
        return null;
    }else{
        console.log('majlesTypes is: ',majlestypes);
    }

    return (
        <FusePageCarded
            classes={{
                content: "flex",
                header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
            }}
            header={
                <MajlesTypesHeader/>
            }
            content={
                <MajlesTypes />
                // <NewMajlesType/>
            }
            
            // innerScroll
        />
    );
}

export default withReducer('majlestypesApp', reducer)(MajlesTypesApp);
