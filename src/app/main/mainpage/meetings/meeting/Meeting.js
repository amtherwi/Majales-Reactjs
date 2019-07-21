import React, {useState} from 'react';
import {Avatar, Button, Tab, Tabs, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {FusePageSimple, FuseAnimate} from '@fuse';
import ThreadsTab from './tabs/ThreadsTab';
import AboutTab from './tabs/AboutTab';
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

function Meeting()
{
    const classes = useStyles();
    const [selectedTab, setSelectedTab] = useState(0);

    function handleTabChange(event, value)
    {
        setSelectedTab(value);
    }

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
                            <Typography className="md:mr-24" variant="h4" color="inherit">جلسة القسم 23</Typography>
                        </FuseAnimate>
                    </div>

                    <div className="flex items-center justify-end">
                        <Button to="/majalesroles" component={Link} className="ml-8 normal-case" variant="contained" color="secondary" aria-label="Follow">المجالس</Button>
                    </div>
                </div>
            }
            contentToolbar={
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    indicatorColor="secondary"
                    textColor="secondary"
                    variant="scrollable"
                    scrollButtons="off"
                    classes={{
                        root: "h-64 w-full border-b-1"
                    }}
                >
                    <Tab
                        classes={{
                            root: "h-64"
                        }}
                        label="المواضيع"/>
                    <Tab
                        classes={{
                            root: "h-64"
                        }} label="حول الاجتماع"/>
                </Tabs>
            }
            content={
                <div className="p-16 sm:p-24">
                    {selectedTab === 0 &&
                    (
                        <ThreadsTab/>
                    )}
                    {selectedTab === 1 && (
                        <AboutTab/>
                    )}
                </div>
            }
        />
    )
}

export default Meeting;
