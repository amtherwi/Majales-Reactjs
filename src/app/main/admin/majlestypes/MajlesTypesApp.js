import React , {useEffect, useRef, useState}from 'react';
import {FusePageCarded,FuseAnimate} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';
import {Fab, Icon} from '@material-ui/core';

import withReducer from 'app/store/withReducer';
import * as Actions from './store/actions'
import reducer from './store/reducers';
import MajlesTypeDialog from './components/MajlesTypeDialog'

// import MajlesTypeTable from './components/MajlesTypeTable';
import MajlesTypesHeader from './components/MajlesTypesHeader';
import MajlesTypes from './components/MajlesTypes'
// 
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    addButton: {
        position: 'absolute',
        right   : 12,
        bottom  : 12,
        zIndex  : 99
    }
});
function MajlesTypesApp(props)
{
    const dispatch = useDispatch();
    const majlestypes = useSelector(({majlestypesApp}) => majlestypesApp.majlestypes);
    const classes = useStyles(props);
    //const pageLayout = useRef(null);

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
        <React.Fragment>
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
                
            }
            
            // innerScroll
        />
        
        <MajlesTypeDialog/>
    </React.Fragment>
    );
}

export default withReducer('majlestypesApp', reducer)(MajlesTypesApp);
