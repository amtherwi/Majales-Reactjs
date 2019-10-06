import React, {useState} from 'react';
import {TableHead, TableSortLabel, TableCell, TableRow, Checkbox, Tooltip, 
        IconButton, Icon, Menu, MenuList, MenuItem, ListItemIcon, ListItemText,} from '@material-ui/core';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';

const rows = [
    
    {
        id            : 'title',
        align         : 'center',
        disablePadding: true,
        label         : 'العنوان',
        sort          : true
    },
    {
        id            : 'description',
        align         : 'center',
        disablePadding: true,
        label         : 'التفاصيل',
        sort          : true
    },
    {
        id            : 'owner',
        align         : 'center',
        disablePadding: true,
        label         : 'المسؤول',
        sort          : true
    },
    {
        id            : 'activeStatus',
        align         : 'center',
        disablePadding: true,
        label         : 'مفعل',
        sort          : true
    },
    {
        id            : 'classificationid',
        align         : 'center',
        disablePadding: true,
        label         : 'النوع',
        sort          : true
    }
    
];

const useStyles = makeStyles(theme => ({
    actionsButtonWrapper: {
        background: theme.palette.background.paper
    }
}));

const  MajalesTableHead = (props) => {
    
    const classes = useStyles(props);
    const [selectedMajalesMenu, setSelectedMajalesMenu] = useState(null);

    const createSortHandler = property => event => {
        props.onRequestSort(event, property);
    };

    function openSelectedMajalesMenu(event)
    {
        setSelectedMajalesMenu(event.currentTarget);
    }

    function closeselectedMajalesMenu()
    {
        setSelectedMajalesMenu(null);
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
                                aria-owns={selectedMajalesMenu ? 'selectedMajalesMenu' : null}
                                aria-haspopup="true"
                                onClick={openSelectedMajalesMenu}
                            >
                                <Icon className='fg-red'>delete</Icon>
                            </IconButton>
                            <Menu
                                id="selectedProductsMenu"
                                anchorEl={selectedMajalesMenu}
                                open={Boolean(selectedMajalesMenu)}
                                onClose={closeselectedMajalesMenu}
                            >
                                <MenuList>
                                    <MenuItem
                                        onClick={() => {
                                            closeselectedMajalesMenu();
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

export default MajalesTableHead;
