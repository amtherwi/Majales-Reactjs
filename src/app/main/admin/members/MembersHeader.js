import React from 'react';
import {Hidden, Icon, IconButton, Input, Paper, Typography} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import {FuseAnimate} from '@fuse';

 import {useDispatch, useSelector} from 'react-redux';
 import * as Actions from './store/actions';

const MembersHeader = (props) => {
    
     const dispatch = useDispatch();
     const searchText = useSelector(({membersApp}) => membersApp.members.searchText);
     const mainTheme = useSelector(({fuse}) => fuse.settings.mainTheme);

    return (
        <div className="flex flex-1 items-center justify-between p-8 sm:p-24">

            <div className="flex flex-shrink items-center sm:w-224">
                <Hidden lgUp>
                    <IconButton
                        onClick={(ev) => {
                            props.pageLayout.current.toggleLeftSidebar()
                        }}
                        aria-label="open left sidebar"
                    >
                        <Icon>menu</Icon>
                    </IconButton>
                </Hidden>

                <div className="flex items-center">
                    <FuseAnimate animation="transition.expandIn" delay={300}>
                        <Icon className="text-32 mr-12">account_box</Icon>
                    </FuseAnimate>
                    <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                        <Typography variant="h6" className="hidden sm:flex">الأعضاء</Typography>
                    </FuseAnimate>
                </div>
            </div>
        </div>
    );
}

export default MembersHeader;
