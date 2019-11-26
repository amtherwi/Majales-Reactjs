import React, {useState, useEffect} from 'react';
import {Icon, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList} from '@material-ui/core';
import * as Actions from '../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import Fade from '@material-ui/core/Fade';
import AlertDialog from './AlertDialog';
function SelectActionList(props)
{
    const { majlestype } = props;
    const dispatch = useDispatch();
    // const majlestype = useSelector(({majlestypeApp}) => majlestypeApp.majlestype);
    const [isOpen, setOpen] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);

    function openSelectedContactMenu(event)
    {
        setAnchorEl(event.currentTarget);
    }

    function closeSelectedContactsMenu()
    {
        setAnchorEl(null);
    }

    function handleUpdate(item){
        dispatch(Actions.openEditMajlestypeDialog(item));
        closeSelectedContactsMenu();

    }
    
    // useEffect(() => {

    //     setOpen(false)
    // }, [isOpen]);
    
    function handelDelete(item){
        dispatch(Actions.openAlertDialog(item));
        closeSelectedContactsMenu();
    }
  
    return (
        <React.Fragment>
            <IconButton
                className="p-4"
                aria-owns={anchorEl ? 'selectedContactsMenu' : null}
                aria-haspopup="true"
                onClick={openSelectedContactMenu}
            >
                <Icon>drag_indicator</Icon>
            </IconButton>
            <Menu
                id="selectedContactsMenu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={closeSelectedContactsMenu}
                keepMounted
                TransitionComponent={Fade}
            >
                <MenuList>
                    <MenuItem
                        onClick={event => handelDelete(majlestype)}
                    >
                        <ListItemIcon className="min-w-40">
                            <Icon>delete</Icon>
                        </ListItemIcon>
                        <ListItemText primary="حذف"/>
                    </MenuItem>
                    <MenuItem
                        onClick={event => handleUpdate(majlestype)}
                    >
                        <ListItemIcon className="min-w-40">
                            <Icon>edit</Icon>
                        </ListItemIcon>
                        <ListItemText primary="تعديل"/>
                    </MenuItem>
  
                </MenuList>
            </Menu>
            
                <AlertDialog />
              
          
        </React.Fragment>
    );
}

export default SelectActionList;

