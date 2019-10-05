import React, {useState} from 'react';
import {TableHead, TableSortLabel, TableCell, TableRow, Checkbox, Tooltip, 
        IconButton, Icon, Menu, MenuList, MenuItem, ListItemIcon, ListItemText,} from '@material-ui/core';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';

const rows = [
    
    {
        id            : 'title',
        align         : 'left',
        disablePadding: false,
        label         : 'اسم المجلس',
        sort          : true
    },
    {
        id            : 'description',
        align         : 'left',
        disablePadding: false,
        label         : 'الوصف',
        sort          : true
    },
    {
        id            : 'owner',
        align         : 'right',
        disablePadding: false,
        label         : 'الجهة',
        sort          : true
    },
    {
        id            : 'classificationId',
        align         : 'right',
        disablePadding: false,
        label         : 'النوع',
        sort          : true
    },
    {
        id            : 'activeStatus',
        align         : 'right',
        disablePadding: false,
        label         : 'مفعل',
        sort          : true
    }
];

const useStyles = makeStyles(theme => ({
    actionsButtonWrapper: {
        background: theme.palette.background.paper
    }
}));

const  BoardsTableHead = (props) => {
    
    const classes = useStyles(props);
    const [selectedBoardsMenu, setSelectedBoardsMenu] = useState(null);

    const createSortHandler = property => event => {
        props.onRequestSort(event, property);
    };

    function openSelectedBoardsMenu(event)
    {
        setSelectedBoardsMenu(event.currentTarget);
    }

    function closeSelectedBoardsMenu()
    {
        setSelectedBoardsMenu(null);
    }



    return (
        <TableHead>
            <TableRow className="h-64">
                <TableCell padding="checkbox" className="relative pl-4 sm:pl-12">
                    <Checkbox
                        indeterminate={props.numSelected > 0 && props.numSelected < props.rowCount}
                        checked={props.numSelected === props.rowCount}
                        onChange={props.onSelectAllClick}
                    />
                    {props.numSelected > 0 && (
                        <div className={clsx("flex items-center justify-center absolute w-64 top-0 left-0 ml-68 h-64 z-10", classes.actionsButtonWrapper)}>
                            <IconButton
                                aria-owns={selectedBoardsMenu ? 'selectedBoardsMenu' : null}
                                aria-haspopup="true"
                                onClick={openSelectedBoardsMenu}
                            >
                                <Icon className='fg-red'>delete</Icon>
                            </IconButton>
                            <Menu
                                id="selectedProductsMenu"
                                anchorEl={selectedBoardsMenu}
                                open={Boolean(selectedBoardsMenu)}
                                onClose={closeSelectedBoardsMenu}
                            >
                                <MenuList>
                                    <MenuItem
                                        onClick={() => {
                                            closeSelectedBoardsMenu();
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
                            className={classes.head}
                            key={row.id}
                            align={row.align}
                            padding={row.disablePadding ? 'none' : 'default'}
                            sortDirection={props.order.id === row.id ? props.order.direction : false}
                        >
                            {row.sort && (
                                <Tooltip
                                    title="Sort"
                                    placement={row.align === "right" ? 'bottom-end' : 'bottom-start'}
                                    enterDelay={300}
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

export default BoardsTableHead;
