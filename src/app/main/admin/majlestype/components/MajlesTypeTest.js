import React, {useEffect, useState, useMemo} from 'react';
import {Divider,ExpansionPanelActions, Toolbar,AppBar, Button, Card, CardContent, Icon, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography} from '@material-ui/core';
import {FuseScrollbars, FuseAnimateGroup} from '@fuse';
import {withRouter} from 'react-router-dom';
import {makeStyles} from '@material-ui/styles';
import _ from '@lodash';
import * as Actions from '../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import TypeDetails from './TypeDetails';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { red } from '@material-ui/core/colors';

// const ExpansionPanelSummary = withStyles({
//     root: {
//       backgroundColor: 'rgba(0, 0, 0, .03)',
//       borderBottom: '1px solid rgba(0, 0, 0, .125)',
//       marginBottom: -1,
//       minHeight: 56,
//       '&$expanded': {
//         minHeight: 56,
//       },
//     },
//     content: {
//       '&$expanded': {
//         margin: '12px 0',
//       },
//     },
//     expanded: {},
//   })(MuiExpansionPanelSummary);
const useStyles = makeStyles(theme => ({
    header  : {
        background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 50%, ' + theme.palette.primary.main + ' 100%)',
        color     : theme.palette.primary.contrastText
    },
    button: {
        margin: theme.spacing(1),
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
        '&selectedPane': {
            background: '#edf5ba'
        }
    },
    expanded: {
        
    },
    
}));


const MajlesTypeTest = () =>  {

    const dispatch = useDispatch();
    const majlestype =  useSelector(({majlestypeApp}) => majlestypeApp.majlestype.data);
    const searchText = useSelector(({majlestypeApp}) => majlestypeApp.majlestype.searchText);
    const classes = useStyles();
    const [data, setData] = useState(majlestype);
    const [expanded, setExpanded] = useState(null);


    // useEffect(() => {
    //     setData(() => dispatch(Actions.getMajlesTypes()));
    // }, [dispatch]);

    useEffect(() => {
        setData(searchText.length === 0 ? majlestype : _.filter(majlestype, item => item.type.includes(searchText)))
    }, [majlestype, searchText]);

    const toggleExpansion = panel => (event, expanded) => {
        setExpanded(expanded ? panel : false);
       
        // '#d1ea52'        
        
    };
    const [color, setColor] = React.useState('default');

    const handleChange = event => {
        if (expanded){
            event.style = { 
                background: '#edf5ba'
            }
        }
        };

    return (
    <div className="w-full flex flex-col">
        <FuseScrollbars className="flex-grow overflow-x-auto w-full">
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
                                    className='flex-grow overflow-x-auto'
                                >

                                    <ExpansionPanelSummary onChange={handleChange}  expandIcon={<Icon>expand_more</Icon>}>
                                        <div className="flex items-center">
                                            {/* <Icon className="mr-12" color="action">class</Icon> */}
                                            <Typography id='Type' className="font-bold mb-4 text-15">{type.type}</Typography>
                                        </div>
                                    </ExpansionPanelSummary>

                                    <ExpansionPanelDetails style={{    backgroundColor: 'rgba(0, 0, 0, .03)',}}>
                                            <TypeDetails id={ type.id } type={type.type} />
                                    </ExpansionPanelDetails>
                                    <Divider />
                                    <ExpansionPanelActions style={{    backgroundColor: 'rgba(0, 0, 0, .03)',}}>
                                    <Button variant="outlined" color="primary" className={classes.button}>
                                        <Icon>edit</Icon>
                                    </Button>
                                    <Button variant="outlined" color="default" className={classes.button}>
                                        <Icon>delete</Icon>
                                    </Button>
                                    </ExpansionPanelActions>
                                </ExpansionPanel>
                            ))
                        }, [data, classes, expanded])}
                    </FuseAnimateGroup>
            </div>
    
      </FuseScrollbars>
    </div>
   );
}

export default withRouter(MajlesTypeTest);
