import React, {useEffect, useState} from 'react';
import {Table,Divider,TableBody, TableCell, TableHead, TableRow, Avatar, AppBar, Button, Card, CardContent, Icon, IconButton, List, ListItem, ListItemText, Toolbar, Typography} from '@material-ui/core';
import {FuseAnimateGroup} from '@fuse';
import { makeStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import * as Actions from '../store/actions';
import {useDispatch, useSelector} from 'react-redux';

// import axios from 'axios';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
      
    },
    tablelink: {
      color: 'inherit',
      "&:visited, &:hover ,&:active": {
          color:'inherit'
      }
  }
  }));
//   "md:flex max-w-2xl"

const TypeDetails = (props) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [data, setData] = useState({});
    const [hasError, setError] = useState(false);
    
    // const [expanded, setExpanded] = useState(null);
    
    const {typesId} = props;
    
    useEffect(() => {
      function getCalssificationData()
      {
        dispatch(Actions.getCalssification(typesId))
        .then(data => setData(data.payload)) 
        .catch(hasError => setError(hasError));
      }
      getCalssificationData();
  }, [dispatch, typesId]);
  
  function handleUpdate(item){
    props.history.push('/admin/majlestypes/' + item.id + '/' + item.type);
    }

    function handelDelete()
    {
      
      const Cid = data.id

     dispatch(Actions.deleteMajlesType(typesId))
     dispatch(Actions.deleteClassification(Cid))
             
    }
    
    function createData(id,role, inCost, outCost) {
        return { id, role, inCost, outCost };
      }
      console.log('data is',data);
      const rows = [

        createData(data.id,'الرئيس', data.ceO_inCost, data.ceO_outCost),
        createData(data.id+1,'الأمين', data.sec_inCost, data.sec_outCost),
        createData(data.id+2,'السكرتير', data.mSec_inCost, data.mSec_outCost),
        createData(data.id+3,'الأعضاء', data.mem_inCost, data.mem_outCost),
       
      ];
     
    return (
       
        <div className={classes.root}>
            { data.id ? 
              <Grid container spacing={4}>
                <Grid item xs={12} variant="subtitle1" color="inherit">
                    <Paper  className={classes.paper} style={{    backgroundColor: 'rgba(0, 1, 0, .03)',}}>
                    <Typography className='font-bold mb-4 text-15'>مستحقات الأعضاء</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12}>
                    {/* <Paper className={classes.paper}>وقت الدوام </Paper>
                    <Divider /> */}
                    {/* <Paper className={classes.paper}> */}
 
                    <Table >
                       
                        <TableBody>
                        <TableRow >
                            <TableCell align="center" component="th" className='font-bold mb-4 text-15'>
                             العضوية 
                            </TableCell>
                            <TableCell align="center" component="th" className='font-bold mb-4 text-15'>
                            وقت الدوام 
                            </TableCell>
                            <TableCell align="center" component="th" className='font-bold mb-4 text-15'>
                            خارج الدوام 
                            </TableCell>
                        </TableRow>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                            <TableCell align="center" scope="row">
                               {row.role} 
                            </TableCell>
                            <TableCell align="center">{row.inCost}</TableCell>
                            {/* <TableCell align="right">{row.outCost}</TableCell> */}
                            <TableCell align="center">{row.outCost}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    {/* </Paper> */}
                </Grid>
                {/* <Grid>
                <Button 
                                    // key={type.id}
                        variant="outlined" 
                        color="primary" 
                        className={classes.button}
                        onClick={event => handleUpdate()}
                        >
                            <Icon>edit</Icon>
                        </Button>
                        <Button  
                        variant="outlined" 
                        color="default" 
                        className={classes.button}
                        onClick={event => handelDelete()}
                        >
                            <Icon>delete</Icon>
                        </Button>
                </Grid> */}
          
            </Grid>
      
            :
            <div className="flex flex-auto items-center justify-center w-full h-full">
                                <Typography color="textSecondary" variant="h5">
                                    لا يوجد تصنيفات  !!
                                </Typography>
                            </div>
                      
                       }
            
            
        </div>
    );
}

export default TypeDetails;
