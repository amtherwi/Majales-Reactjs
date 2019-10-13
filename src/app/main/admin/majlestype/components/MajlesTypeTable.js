import React, {useEffect, useState, useMemo} from 'react';
import {Icon, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Input, Paper, Typography} from '@material-ui/core';
import {FuseScrollbars, FuseAnimate, FuseAnimateGroup} from '@fuse';
import {withRouter} from 'react-router-dom';
// import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import _ from '@lodash';
import MajlesTypeTableHead from './MajlesTypeTableHead';
import * as Actions from '../store/actions';
import {useDispatch, useSelector} from 'react-redux';

const useStyles = makeStyles(theme => ({
    header  : {
        background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + theme.palette.primary.main + ' 100%)',
        color     : theme.palette.primary.contrastText
    },
    panel   : {
        margin         : 0,
        borderWidth    : '1px 1px 0 1px',
        borderStyle    : 'solid',
        borderColor    : theme.palette.divider,
        '&:first-child': {
            borderRadius: '16px 16px 0 0'
        },
        '&:last-child' : {
            borderRadius: '0 0 16px 16px',
            borderWidth : '0 1px 1px 1px'
        },
        '&$expanded'   : {
            margin: 'auto',
        },
    },
    expanded: {}
}));


const MajlesTypeTable = (props) =>  {

    const dispatch = useDispatch();
    const majlestype =  useSelector(({majlestypeApp}) => majlestypeApp.majlestype.data);
    const searchText = useSelector(({majlestypeApp}) => majlestypeApp.majlestype.searchText);
    const classes = useStyles();
    const [selected, setSelected] = useState([]);
    const [data, setData] = useState(majlestype);
    const [expanded, setExpanded] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [order, setOrder] = useState({
        direction: 'asc',
        id       : null
    });

    useEffect(() => {
        dispatch(Actions.getMajlesTypes());
    }, [dispatch]);

    useEffect(() => {
        setData(searchText.length === 0 ? majlestype : _.filter(majlestype, item => item.name.includes(searchText)))
    }, [majlestype, searchText]);
    const toggleExpansion = panel => (event, expanded) => {
        setExpanded(expanded ? panel : false);
    };

    function handleRequestSort(event, property)
    {
        const id = property;
        let direction = 'desc';

        if ( order.id === property && order.direction === 'desc' )
        {
            direction = 'asc';
        }

        setOrder({
            direction,
            id
        });
    }

    function handleSelectAllClick(event)
    {
        if ( event.target.checked )
        {
            setSelected(data.map(n => n.id));
            return;
        }
        setSelected([]);
    }

    function handleClick(item)
    {
        // props.history.push('/admin/boards/board/' + item.id + '/' + item.handle);
    }

    function handleCheck(event, id)
    {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if ( selectedIndex === -1 )
        {
            newSelected = newSelected.concat(selected, id);
        }
        else if ( selectedIndex === 0 )
        {
            newSelected = newSelected.concat(selected.slice(1));
        }
        else if ( selectedIndex === selected.length - 1 )
        {
            newSelected = newSelected.concat(selected.slice(0, -1));
        }
        else if ( selectedIndex > 0 )
        {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
    }

    function handleChangePage(event, page)
    {
        setPage(page);
    }

    function handleChangeRowsPerPage(event)
    {
        setRowsPerPage(event.target.value);
    }

    return (
        <div className="w-full flex flex-col">
<FuseScrollbars className="flex-grow overflow-x-auto">
   
{/*                     <MajlesTypeTableHead
                        numSelected={selected.length}
                        order={order}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={data.length}
                    /> */}

    <div className="flex flex-col flex-1 flex-shrink-0 max-w-xl w-full mx-auto px-16 sm:px-24 py-24 sm:py-32">
                {
                    (data.length === 0) && (
                        <div className="flex flex-auto items-center justify-center w-full h-full">
                            <Typography color="textSecondary" variant="h5">
                                لا يوجد أنواع للمجالس !!
                            </Typography>
                        </div>
                    )
                }
                <FuseAnimateGroup
                    enter={{
                        animation: "transition.slideUpBigIn"
                    }}
                >
                    {useMemo(() => {
                        return data.map((type) => (

                            <ExpansionPanel
                                classes={{
                                    root    : classes.panel,
                                    expanded: classes.expanded
                                }}
                                key={type.id}
                                expanded={expanded === type.id}
                                onChange={toggleExpansion(type.id)}
                                elevation={0}
                            >

                                <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
                                    <div className="flex items-center">
                                        <Icon className="mr-8" color="action">help_outline</Icon>
                                        <Typography className="">{type.type}</Typography>
                                    </div>
                                </ExpansionPanelSummary>

                                <ExpansionPanelDetails>
                                    <Typography className="">testtest</Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        ))
                    }, [data, classes, expanded])}
                </FuseAnimateGroup>

            </div>
    
  </FuseScrollbars>
</div>
    );
}

export default withRouter(MajlesTypeTable);
