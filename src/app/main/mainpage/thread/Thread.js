import React, {useState} from 'react';
import {Avatar, Button, Tab, Tabs, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {FusePageSimple, FuseAnimate} from '@fuse';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    layoutHeader: {
        height                        : 120,
        minHeight                     : 120,
        [theme.breakpoints.down('md')]: {
            height   : 100,
            minHeight: 100
        }
    }
}));

function Thread()
{

    const classes = useStyles();
    return (
        <FusePageSimple
            classes={{
                header : classes.layoutHeader,
                toolbar: "px-16 sm:px-24"
            }}
            header={
                <div className="p-24 flex flex-1 flex-col items-center justify-center md:flex-row md:items-end">
                    <div className="flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-start">
                        <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                            <Typography className="md:mr-24" variant="h4" color="inherit">النظر في إقرار نتيجة الطالب في مرحلة الماجستير/ فيصل بن مسعود الخنفري</Typography>
                        </FuseAnimate>
                    </div>

                    <div className="flex items-center justify-end">
                        <Button to="/majalesroles" component={Link} className="ml-8 normal-case" variant="contained" color="secondary" aria-label="Follow">الإجتماع</Button>
                    </div>
                </div>
            }


        />
    )
}

export default Thread;
