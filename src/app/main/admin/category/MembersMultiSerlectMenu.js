import React, {useState} from 'react';
import {Icon, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList} from '@material-ui/core';
import * as Actions from './store/actions';
import {useDispatch, useSelector} from 'react-redux';

const MembersMultiSerlectMenu = (props) => {

    const dispatch = useDispatch();
    const selectedMemberIds = useSelector(({membersApp}) => membersApp.members.selectedMemberIds);
    const [anchorEl, setAnchorEl] = useState(null);

    function openSelectedContactMenu(event)
    {
        setAnchorEl(event.currentTarget);
    }

    function closeSelectedContactsMenu()
    {
        setAnchorEl(null);
    }

    return (
        <React.Fragment>
            <IconButton
                className="p-0"
                aria-owns={anchorEl ? 'selectedContactsMenu' : null}
                aria-haspopup="true"
                onClick={openSelectedContactMenu}
            >
                <Icon>more_horiz</Icon>
            </IconButton>
            <Menu
                id="selectedContactsMenu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={closeSelectedContactsMenu}
            >
                <MenuList>
                    <MenuItem
                        onClick={() => {
                            dispatch(Actions.removeMember(selectedMemberIds));
                            closeSelectedContactsMenu();
                        }}
                    >
                        <ListItemIcon className="min-w-40">
                            <Icon>delete</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Remove"/>
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            dispatch(Actions.selectAllMembers(selectedMemberIds));
                            closeSelectedContactsMenu();
                        }}
                    >
                        <ListItemIcon className="min-w-40">
                            <Icon>star</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Starred"/>
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            dispatch(Actions.setMembersUnstarred(selectedMemberIds));
                            closeSelectedContactsMenu();
                        }}
                    >
                        <ListItemIcon className="min-w-40">
                            <Icon>star_border</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Unstarred"/>
                    </MenuItem>
                </MenuList>
            </Menu>
        </React.Fragment>
    );
}

export default MembersMultiSerlectMenu;

