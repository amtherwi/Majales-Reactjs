import React, {useEffect} from 'react';
import {Button, Icon, IconButton, AppBar, Toolbar, Hidden, Typography} from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import {fade} from '@material-ui/core/styles/colorManipulator';
import {FuseAnimateGroup, FuseAnimate} from '@fuse';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import withReducer from 'app/store/withReducer';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';
import {makeStyles} from '@material-ui/styles';
import MeetingList from './MeetingList';

const useStyles = makeStyles(theme => ({
    root    : {
        background: theme.palette.primary.main,
        color     : theme.palette.getContrastText(theme.palette.primary.main)
    },
    board   : {
        cursor                  : 'pointer',
        boxShadow               : theme.shadows[0],
        transitionProperty      : 'box-shadow border-color',
        transitionDuration      : theme.transitions.duration.short,
        transitionTimingFunction: theme.transitions.easing.easeInOut,
        background              : theme.palette.primary.dark,
        color                   : theme.palette.getContrastText(theme.palette.primary.dark),
        '&:hover'               : {
            boxShadow: theme.shadows[6]
        }
    },
    margin: {
        margin: theme.spacing(2),
    },
    newBoard: {
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: fade(theme.palette.getContrastText(theme.palette.primary.main), 0.6),
        '&:hover'  : {
            borderColor: fade(theme.palette.getContrastText(theme.palette.primary.main), 0.8)
        }
    }
}));

function Meetings(props)
{
    const dispatch = useDispatch();
    const meetings = useSelector(({Meetings}) => Meetings.meetings);
    const {majalesroleType} = props.match.params;
    const classes = useStyles(props);

    useEffect(() => {

        return () => {
            dispatch(Actions.getMeetings());
        }
    }, [dispatch]);

    return (
        <div
            className="flex flex-1 flex-col w-full h-full relative"
        >
            <AppBar position="static" color="primary">
                <Toolbar className="flex items-center justify-between px-4 sm:px-24 h-64 sm:h-96 container">
                    <Hidden xsDown>
                        <Button to="/majalesroles" component={Link} variant="contained">
                            <Icon className="ml-8">assessment</Icon>
                            المجالس
                        </Button>
                    </Hidden>

                    <Hidden smUp>
                        <IconButton color="inherit" to="/majalesroles" component={Link}>
                            <Icon>assessment</Icon>
                        </IconButton>
                    </Hidden>

                    <div className="flex flex-1 justify-center items-center">
                        <div className="flex items-center justify-center">
                            <Typography
                                className="text-16 font-600 cursor-pointer"
                                color="inherit"
                            >
                                المواضيع
                            </Typography>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>

            <div className={clsx("flex flex-1 overflow-y-auto overflow-x-hidden")}>
                            <div className="flex container p-16 md:p-24">
                                    <MeetingList majalesroleType={majalesroleType}/>
                            </div>
            </div>


        </div>
    );
}

 export default withReducer('Meetings', reducer)(Meetings);
