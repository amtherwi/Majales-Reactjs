import React, {useEffect, useState} from 'react';
import {
    AppBar,
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    Icon,
    IconButton,
    Input,
    List,
    ListItem,
    ListItemText,
    Paper,
    Toolbar,
    Typography
} from '@material-ui/core';
import {FuseAnimateGroup} from '@fuse';
import axios from 'axios';
import {Link} from 'react-router-dom';

function TimelineTab()
{


    return (
        <div className="md:flex max-w-2xl">

            <div className="flex flex-col flex-1 md:pr-32">

                <FuseAnimateGroup
                    enter={{
                        animation: "transition.slideUpBigIn"
                    }}
                >
                    <div>
                        <Card className="w-full overflow-hidden">
                            <Input
                                className="p-16 w-full"
                                classes={{root: 'text-14'}}
                                placeholder="Write something.."
                                multiline
                                rows="6"
                                margin="none"
                                disableUnderline
                            />
                            <AppBar className="card-footer flex flex-row border-t-1" position="static" color="default" elevation={0}>
                                <div className="flex-1 items-center">
                                    <IconButton aria-label="Add photo">
                                        <Icon>photo</Icon>
                                    </IconButton>
                                    <IconButton aria-label="Mention somebody">
                                        <Icon>person</Icon>
                                    </IconButton>
                                    <IconButton aria-label="Add location">
                                        <Icon>location_on</Icon>
                                    </IconButton>
                                </div>

                                <div className="p-8">
                                    <Button variant="contained" color="primary" size="small" aria-label="post">
                                        POST
                                    </Button>
                                </div>

                            </AppBar>
                        </Card>

                        <Divider className="my-32"/>
                    </div>

                            <Card key="asd" className="mb-32 overflow-hidden">
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="Recipe" src="asdas"/>
                                    }
                                    action={
                                        <IconButton aria-label="more">
                                            <Icon>more_vert</Icon>
                                        </IconButton>
                                    }
                                    title={(
                                        <span>
                                                <Typography className="inline font-medium mr-4" color="primary" paragraph={false}>
                                                    "ahmad"
                                                </Typography>
                                            "posted on your timeline"

                                            </span>
                                    )}
                                    subheader="2019"
                                />

                                <CardContent className="py-0">

                                        <Typography component="p" className="mb-16">
                                            "hi"
                                        </Typography>


                                </CardContent>

                            </Card>
                </FuseAnimateGroup>

            </div>

        </div>
    );
}

export default TimelineTab;
