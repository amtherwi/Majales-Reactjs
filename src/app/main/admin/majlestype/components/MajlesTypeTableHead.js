import React, {useState} from 'react';
import {TableHead, TableSortLabel, TableCell, TableRow, Checkbox, Tooltip, 
        IconButton, Icon, Menu, MenuList, MenuItem, ListItemIcon, ListItemText,} from '@material-ui/core';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';

const rows = [
    
    {
        id            : 'type',
        align         : 'center',
        disablePadding: true,
        label         : 'نوع المجلس',
        sort          : true
    },
    {
        id            : 'id',
        align         : 'center',
        disablePadding: true,
        label         : 'ID',
        sort          : true
    }
    
];

const useStyles = makeStyles(theme => ({
    actionsButtonWrapper: {
        background: theme.palette.background.paper
    }
}));

const  MajalesTypeTableHead = (props) => {
    
    const classes = useStyles(props);
    const [selectedMajalesTypeMenu, setSelectedMajalesTypeMenu] = useState(null);

    const createSortHandler = property => event => {
        props.onRequestSort(event, property);
    };

    function openSelectedMajalesMenu(event)
    {
        setSelectedMajalesTypeMenu(event.currentTarget);
    }

    function closeselectedMajalesTypeMenu()
    {
        setSelectedMajalesTypeMenu(null);
    }



    return (
        <TableHead>
            <TableRow className="h-60">
                <TableCell padding="checkbox" className="relative pl-4 sm:pl-8">
                    <Checkbox
                        indeterminate={props.numSelected > 0 && props.numSelected < props.rowCount}
                        checked={props.numSelected === props.rowCount}
                        onChange={props.onSelectAllClick}
                    />
                    {props.numSelected > 0 && (
                        <div className={clsx("flex items-center justify-center absolute w-60 top-0 left-0 ml-60 h-60 z-10", classes.actionsButtonWrapper)}>
                            <IconButton
                                aria-owns={selectedMajalesTypeMenu ? 'selectedMajalesTypeMenu' : null}
                                aria-haspopup="true"
                                onClick={openSelectedMajalesMenu}
                            >
                                <Icon className='fg-red'>delete</Icon>
                            </IconButton>
                            <Menu
                                id="selectedProductsMenu"
                                anchorEl={selectedMajalesTypeMenu}
                                open={Boolean(selectedMajalesTypeMenu)}
                                onClose={closeselectedMajalesTypeMenu}
                            >
                                <MenuList>
                                    <MenuItem
                                        onClick={() => {
                                            closeselectedMajalesTypeMenu();
                                        }}
                                    >
                                        <ListItemIcon className="min-w-40">
                                            <Icon>delete</Icon>
                                        </ListItemIcon>
                                        <ListItemText primary="Remove"/>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                    )}
                </TableCell>
                {rows.map(row => {
                    return (
                        <TableCell 
                             
                            key={row.id}
                            align={row.align}
                            padding={row.disablePadding ? 'none' : 'default'}
                            sortDirection={props.order.id === row.id ? props.order.direction : false}
                        >
                            {row.sort && (
                                <Tooltip
                                    title="Sort"
                                    placement={row.align === "center" ? 'bottom-end' : 'bottom-start'}
                                    enterDelay={200}
                                >
                                    <TableSortLabel
                                        active={props.order.id === row.id}
                                        direction={props.order.direction}
                                        onClick={createSortHandler(row.id)}
                                    >
                                        {row.label}
                                    </TableSortLabel>
                                </Tooltip>
                            )}
                        </TableCell>
                    );
                }, this)}
            </TableRow>
        </TableHead>
    );
}

export default MajalesTypeTableHead;
