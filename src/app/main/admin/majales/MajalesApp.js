import React, {useEffect, useRef, useState} from 'react';
import {Fab, Icon} from '@material-ui/core';
import {FusePageCarded,FuseAnimate} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';
import MajalesDialog from './MajalesDialog';
import {makeStyles} from '@material-ui/styles';

import withReducer from 'app/store/withReducer';
import * as Actions from './store/actions'
import reducer from './store/reducers';

import MajalesTable from './components/MajalesTable';
import MajalesHeader from './components/MajalesHeader';

const useStyles = makeStyles({
    addButton: {
        position: 'absolute',
        right   : 12,
        bottom  : 12,
        zIndex  : 99
    }
});

function MajalesApp(props) {
    const dispatch = useDispatch();

    const classes = useStyles(props);
    const majales = useSelector(({majalesApp}) => majalesApp.majales);

    useEffect(() => {
        dispatch(Actions.getMajales());
    }, [dispatch]);

    useEffect(() => {
        dispatch(Actions.getMajlesTypes());
    }, [dispatch]);

    if (!majales) {
        return null;
    }

    return (
        <React.Fragment>
            <FusePageCarded
                classes={{
                    content: "flex",
                    header: "min-h-72 h-72 sm:h-136 sm:min-h-136"
                }}
                header={
                    <MajalesHeader/>
                }
                content={
                    <MajalesTable/>
                }
                innerScroll
            />
            <FuseAnimate animation="transition.expandIn" delay={300}>
                <Fab
                    color="primary"
                    aria-label="add"
                    className={classes.addButton}
                    onClick={ev => dispatch(Actions.openNewMajlesDialog())}
                >
                    <Icon>person_add</Icon>
                </Fab>
            </FuseAnimate>
            <MajalesDialog/>
        </React.Fragment>
    );
}

export default withReducer('majalesApp', reducer)(MajalesApp);
