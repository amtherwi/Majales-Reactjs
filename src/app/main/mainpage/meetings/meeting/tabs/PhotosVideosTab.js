import React, {useEffect, useState} from 'react';
import {GridList, GridListTile, GridListTileBar, Icon, IconButton, Typography, ListSubheader} from '@material-ui/core';
import {FuseAnimateGroup} from '@fuse';
import axios from 'axios';

function PhotosVideosTab()
{


    return (
        <div className="md:flex max-w-2xl">
            <div className="flex flex-col flex-1 md:pr-32">
                <FuseAnimateGroup
                    enter={{
                        animation: "transition.slideUpBigIn"
                    }}
                >

                        <div key="123" className="mb-48">

                            <ListSubheader component="div" className="flex items-center pl-0 mb-24">
                                <Typography className="mr-16" variant="h6">Ahmad</Typography>
                                <Typography variant="subtitle1" color="textSecondary">"info"</Typography>
                            </ListSubheader>

                            <GridList className="" spacing={8} cols={0}>
                                    <GridListTile
                                        classes={{
                                            root: "w-full sm:w-1/2 md:w-1/4",
                                            tile: "rounded-8"
                                        }}
                                        key="asdasdas"
                                    >
                                        <img src="./asd" alt="asd"/>
                                        <GridListTileBar
                                            title="asd"
                                            actionIcon={
                                                <IconButton>
                                                    <Icon className="text-white opacity-75">info</Icon>
                                                </IconButton>
                                            }
                                        />
                                    </GridListTile>

                            </GridList>
                        </div>

                </FuseAnimateGroup>
            </div>
        </div>
    );
}

export default PhotosVideosTab;
