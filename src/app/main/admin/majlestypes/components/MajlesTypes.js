import React, {useEffect, useState} from 'react';
import {Icon, ExpansionPanel, 
        ExpansionPanelDetails, ExpansionPanelSummary, Typography,Fab, Grid} from '@material-ui/core';
import {FuseScrollbars, FuseAnimateGroup,FuseAnimate} from '@fuse';
import {makeStyles} from '@material-ui/styles';
import _ from '@lodash';
import * as Actions from '../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import Classification from './Classification';
import SelectActionList from './SelectActionList';
import withReducer from 'app/store/withReducer';
import reducer from '../store/reducers';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControlLabel from '@material-ui/core/FormControlLabel';


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
    addButton: {
        position: 'absolute',
        right   : 12,
        bottom  : 12,
        zIndex  : 99
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
    //const [expanded, setExpanded] = useState(false);
    const expanded = useSelector(({majlestypesApp}) => majlestypesApp.majlestypes.expanded);
    useEffect(() => {
        dispatch(Actions.getMajlesTypes());
    }, [dispatch]);
    
    useEffect(() => {
        setData(searchText.length === 0 ? majlestypes : _.filter(majlestypes, item => item.type.includes(searchText)))
        

    }, [majlestypes, searchText]);

    const toggleExpansion = panel => (event, expanded) => {

       if(expanded){
        
        dispatch(Actions.toggoleExpansion(panel))

       } else {
           dispatch(Actions.collapsedExpansion())
       }
       //panel : false);
       
 
    };
   
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
                        .map(majtype => (
                            
                            <ExpansionPanel 
                                classes={{
                                    root    : classes.panel,
                                    expanded: classes.expanded
                                }}
                                key={majtype.id}
                                expanded={expanded === majtype.id}
                                onChange={toggleExpansion(majtype.id)}
                                elevation={0}
                                className='flex-grow'
                            >
                            <ExpansionPanelSummary 
                                expandIcon={<ExpandMoreIcon/>}
                                aria-label="Expand"
                                aria-controls={`${majtype.id}-content`}
                                id={`${majtype.id}-header`}
                            >
                                <FormControlLabel
                                    aria-label="Acknowledge"
                                    onClick={event => event.stopPropagation()}
                                    onFocus={event => event.stopPropagation()}
                                    // disabled = {expanded === type.id?  false:true}
                                    control={expanded === majtype.id?
                                        <Grid className={classes.buttonlink} hidden = {expanded === majtype.id?  false:true}> 
                                            <SelectActionList majlestype={majtype}/>
                                        </Grid>
                                        :<div></div>    
                                        }
                                    label={
                                        <Typography id='Type' className={classes.heading}>
                                            {majtype.type}
                                        </Typography>
                                        }
                                /> 
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails  style={{backgroundColor: 'rgba(0, 0, 0, .03)',}}>
                                        {  expanded === majtype.id? 
                                        <Classification majlesType={majtype}   />
                                            : <Typography></Typography>
                                        }
                            </ExpansionPanelDetails>
                      
                            </ExpansionPanel>
                            ))}
                <FuseAnimate animation="transition.expandIn" delay={300}>
                <Fab
                    color="primary"
                    aria-label="add"
                    className={classes.addButton}
                    onClick={ev => dispatch(Actions.openNewMajlestypeDialog())}
                >
                    <Icon > add</Icon>
                </Fab>
            </FuseAnimate>
        </FuseAnimateGroup>    
      </FuseScrollbars>
    
    </div>

   );
}
export default  withReducer('majlestypesApp', reducer)(MajlesTypes);
// export default withRouter(MajlesTypes);
