import React, {useRef} from 'react';
import {darken} from '@material-ui/core/styles/colorManipulator';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import MeetingCard from './MeetingCard';
import Majalesroles from "../majalesroles/majalesroles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    list: {
        backgroundColor         : darken(theme.palette.background.default, theme.palette.type === 'light' ? 0.02 : .4),
        transitionProperty      : 'box-shadow',
        transitionDuration      : theme.transitions.duration.short,
        transitionTimingFunction: theme.transitions.easing.easeInOut
    }
}));

function MeetingList(props)
{
    const classes = useStyles(props);
    return (

        <div className={classes.root}>
            <Grid container spacing={5}>
                <MeetingCard/>
                <MeetingCard/>
                <MeetingCard/>
                <MeetingCard/>
                <MeetingCard/>
                <MeetingCard/>
                <MeetingCard/>
                <MeetingCard/>
                <MeetingCard/>
                <MeetingCard/>
                <MeetingCard/>
                <MeetingCard/>
                <MeetingCard/>
                <MeetingCard/>
                <MeetingCard/>
                <MeetingCard/>
                <MeetingCard/>
                <MeetingCard/>
                <MeetingCard/>
                <MeetingCard/>
                <MeetingCard/>
            </Grid>
        </div>


    );
}

export default MeetingList;
