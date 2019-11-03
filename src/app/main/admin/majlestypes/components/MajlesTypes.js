import React, {useEffect, useState} from 'react';
import {Divider,ExpansionPanelActions, Button,IconButton, Icon, ExpansionPanel, 
        ExpansionPanelDetails, ExpansionPanelSummary, Typography} from '@material-ui/core';
import {FuseScrollbars, FuseAnimateGroup} from '@fuse';
import {withRouter} from 'react-router-dom';
import {makeStyles} from '@material-ui/styles';
import _ from '@lodash';
import * as Actions from '../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import TypeDetails from './TypeDetails';
import LeftSideLayout1 from 'app/fuse-layouts/layout1/components/LeftSideLayout1';
// import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
      },
    header  : {
        background: 'linear-gradient(to right, ' + 
                    theme.palette.primary.dark + ' 50%, ' + 
                    theme.palette.primary.main + ' 100%)',
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
    buttonlink: {
        margin: theme.spacing(1),
        color: 'inherit',
        "&:visited, &:hover ,&:active": {
            color:'inherit'
        }
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
      },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        alignItems: 'center',
        paddingInline:'400px'
        
    },
}));


function MajlesTypes(props) {
    const dispatch = useDispatch();
    const majlestypes =  useSelector(({majlestypesApp}) => majlestypesApp.majlestypes.data);
    const searchText = useSelector(({majlestypesApp}) => majlestypesApp.majlestypes.searchText);
    const classes = useStyles();
    const [data, setData] = useState(majlestypes);
    const [expanded, setExpanded] = useState(false);
    const [ishidden, setIsHidden] = useState(true);

    


    // useEffect(() => {
    //     setData(() => dispatch(Actions.getMajlesTypes()));
    // }, [dispatch]);

    useEffect(() => {
        setData(searchText.length === 0 ? majlestypes : _.filter(majlestypes, item => item.type.includes(searchText)))
    }, [majlestypes, searchText]);

    const toggleExpansion = panel => (event, expanded) => {
        setExpanded(expanded ? panel : false);
        setIsHidden(true)
        // '#d1ea52'        
        
    };
   
    function handleUpdate(item){
        props.history.push('/admin/majlestypes/' + item.id + '/' + item.type);
    }
    
        function handelDelete(item)
        {
          const {id} = item;
         
         dispatch(Actions.deleteMajlesType(id))
                 
        }
     
    return (
    <div className="w-full flex  ">
        <FuseScrollbars className="  w-full">
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
                        }}>
                    
                            {_.orderBy(data)
                            .map(type => (
                                
                                <ExpansionPanel 
                                    classes={{
                                        root    : classes.panel,
                                        expanded: classes.expanded
                                    }}
                                    key={type.id}
                                    expanded={expanded === type.id}
                                    onChange={toggleExpansion(type.id)}
                                    elevation={0}
                                    className='flex-grow'
                                    
                                >
                                    <ExpansionPanelSummary expanded={()=>setIsHidden(false)}
                                        expandIcon={<Icon>expand_more</Icon>}
                                        aria-controls={`${type.id}-content`}
                                        id={`${type.id}-header`}
                                    >
                                        {/* <div className="flex items-center"> */}
                                            <Typography id='Type' className={classes.heading}>{type.type}</Typography>
                                            <div hidden={ishidden} className={classes.secondaryHeading}>
                                            <IconButton 
                                                // key={type.id}
                                                // variant="outlined" 
                                                // color="primary" 
                                                // className={classes.button}
                                                className={classes.secondaryHeading}
                                                onClick={event => handleUpdate(type)}
                                                >
                                                    <Icon>edit</Icon>
                                            </IconButton> 
                                             <IconButton  
                                                // variant="outlined" 
                                                // color="default" 
                                                // className={classes.button}
                                                onClick={event => handelDelete(type)}
                                                >
                                                    <Icon>delete</Icon>
                                                </IconButton> 
                                                {/* </div> */}
                                        </div>
                                    </ExpansionPanelSummary>

                                    <ExpansionPanelDetails  style={{    backgroundColor: 'rgba(0, 0, 0, .03)',}}>
                                          {  expanded == type.id? 
                                            <TypeDetails typesId={ expanded }  />
                                             : <Typography></Typography>
                                            }
                                    </ExpansionPanelDetails>
                                    <Divider />
                                    <ExpansionPanelActions style={{    backgroundColor: 'rgba(0, 0, 0, .03)',}}>
                                   
                                    <Button 
                                    // key={type.id}
                                    variant="outlined" 
                                    color="primary" 
                                    className={classes.button}
                                    onClick={event => handleUpdate(type)}
                                    >
                                        <Icon>edit</Icon>
                                    </Button>
                                    <Button  
                                    variant="outlined" 
                                    color="default" 
                                    className={classes.button}
                                    onClick={event => handelDelete(type)}
                                    >
                                        <Icon>delete</Icon>
                                    </Button>
                                    </ExpansionPanelActions>
                                </ExpansionPanel>
                                ))}
                    </FuseAnimateGroup>    
      </FuseScrollbars>
    </div>
   );
}

export default withRouter(MajlesTypes);
