import React, {useEffect, useState} from 'react';
import {Avatar, AppBar, Button, Card, CardContent, Icon, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Toolbar, Typography} from '@material-ui/core';
import {FuseAnimateGroup} from '@fuse';
import axios from 'axios';

function AboutTab()
{

    return (
        <div className="md:flex max-w-2xl">

            <div className="flex flex-col flex-1 md:pr-32">
                <FuseAnimateGroup
                    enter={{
                        animation: "transition.slideUpBigIn"
                    }}
                >
                    <Card className="w-full mb-16">
                        <AppBar position="static" elevation={0}>
                            <Toolbar className="pl-16 pr-8">
                                <Typography variant="subtitle1" color="inherit" className="flex-1">
                                    General Information
                                </Typography>
                            </Toolbar>
                        </AppBar>

                        <CardContent>
                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Gender</Typography>
                                <Typography>Male</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Birthday</Typography>
                                <Typography>15/2/1990</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Locations</Typography>

                                    <div className="flex items-center" key="Riyadh">
                                        <Typography>Riyadh</Typography>
                                        <Icon className="text-16 ml-4" color="action">location_on</Icon>
                                    </div>

                            </div>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">About Me</Typography>
                                <Typography>I am very Happy</Typography>
                            </div>

                        </CardContent>
                    </Card>

                    <Card className="w-full mb-16">
                        <AppBar position="static" elevation={0}>
                            <Toolbar className="pl-16 pr-8">
                                <Typography variant="subtitle1" color="inherit" className="flex-1">
                                    Work
                                </Typography>
                            </Toolbar>
                        </AppBar>

                        <CardContent>
                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Occupation</Typography>
                                <Typography>ImamU</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Skills</Typography>
                                <Typography>Every Things</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Jobs</Typography>
                                <table className="">
                                    <tbody>
                                            <tr key="MIS">
                                                <td className="pr-16">
                                                    <Typography>MIS</Typography>
                                                </td>
                                                <td>
                                                    <Typography color="textSecondary">2018</Typography>
                                                </td>
                                            </tr>

                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="w-full mb-16">
                        <AppBar position="static" elevation={0}>
                            <Toolbar className="pl-16 pr-8">
                                <Typography variant="subtitle1" color="inherit" className="flex-1">
                                    Contact
                                </Typography>
                            </Toolbar>
                        </AppBar>

                        <CardContent>
                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Address</Typography>
                                <Typography>Riyadh</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Tel.</Typography>

                                    <div className="flex items-center" key="123">
                                        <Typography>0529841200</Typography>
                                    </div>
                            </div>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Website</Typography>
                                    <div className="flex items-center" key="www.wd">
                                        <Typography>www.F9X19.com</Typography>
                                    </div>

                            </div>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Emails</Typography>
                                    <div className="flex items-center" key="ahmad.s.abusadasda@sdffsdf">
                                        <Typography>ahmad.s.abusadasda@sdffsdf</Typography>
                                    </div>
                            </div>

                        </CardContent>
                    </Card>
                </FuseAnimateGroup>
            </div>

            <div className="flex flex-col md:w-320">
                <FuseAnimateGroup
                    enter={{
                        animation: "transition.slideUpBigIn"
                    }}
                >
                    <Card className="w-full mb-16">
                        <AppBar position="static" elevation={0}>
                            <Toolbar className="pl-16 pr-8">
                                <Typography variant="subtitle1" color="inherit" className="flex-1">
                                    Friends
                                </Typography>
                                <Button className="normal-case" color="inherit" size="small">See 454 more</Button>
                            </Toolbar>
                        </AppBar>
                        <CardContent className="p-0">
                            <List className="p-8">
                                    <img key="asdasd" className="w-64 m-4" src="./asd" alt="asdsadas"/>

                            </List>
                        </CardContent>
                    </Card>

                    <Card className="w-full mb-16">
                        <AppBar position="static" elevation={0}>
                            <Toolbar className="pl-16 pr-8">
                                <Typography variant="subtitle1" color="inherit" className="flex-1">
                                    Joined Groups
                                </Typography>
                                <Button className="normal-case" color="inherit" size="small">See 6 more</Button>
                            </Toolbar>
                        </AppBar>
                        <CardContent className="p-0">
                            <List className="p-0">
                                    <ListItem key="asda">
                                        <Avatar alt="ahmad">A</Avatar>
                                        <ListItemText
                                            primary={(
                                                <div className="">
                                                    <Typography className="inline font-medium" color="secondary" paragraph={false}>
                                                       AbuSaa
                                                    </Typography>

                                                    <Typography className="inline ml-4" paragraph={false}>
                                                        F9X19
                                                    </Typography>
                                                </div>
                                            )}
                                            secondary="F9X19"
                                        />
                                        <ListItemSecondaryAction>
                                            <IconButton>
                                                <Icon>more_vert</Icon>
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </FuseAnimateGroup>
            </div>
        </div>
    );
}

export default AboutTab;
