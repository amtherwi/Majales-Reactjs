import React, {useEffect, useState} from 'react';
import {Table,Divider,TableBody, TableCell, TableHead, TableRow, Avatar, AppBar, Button, Card, CardContent, Icon, IconButton, List, ListItem, ListItemText, Toolbar, Typography} from '@material-ui/core';
import {FuseAnimateGroup} from '@fuse';
import { makeStyles } from '@material-ui/core/styles';
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
  }));
//   "md:flex max-w-2xl"
    // const dispatch = useDispatch();
    // const majlestype =  useSelector(({classificationApp}) => classificationApp.calssification.data);
    // const classes = useStyles();
    // const [data, setData] = useState(majlestype);
    // const [expanded, setExpanded] = useState(null);


   
function createData(role, inCost, outCost) {
    return { role, inCost, outCost };
  }
  
  const rows = [
    createData('الرئيس', 200, 300),
    createData('الأمين', 200, 300),
    createData('السكرتير', 200, 300),
    createData('الأعضاء', 200, 300),
   
  ];


const TypeDetails = (props) => {
const classes = useStyles();
// useEffect(() => {
//     setData(() => dispatch(Actions.getClassification(props.id)));
// }, [dispatch]);

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} variant="subtitle1" color="inherit">
                    <Paper  className={classes.paper} style={{    backgroundColor: 'rgba(0, 1, 0, .03)',}}>مستحقات الأعضاء </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>وقت الدوام </Paper>
                    <Divider />
                    <Paper className={classes.paper}>
 
                    <Table className={classes.table}>
                        {/* <TableHead>
                        <TableRow>
                            <TableCell>الرئيس</TableCell>
                            <TableCell >الأمين</TableCell>
                            <TableCell >السكرتير</TableCell>
                            <TableCell >الأعضاء</TableCell>
                        </TableRow>
                        </TableHead> */}
                        <TableBody>
                        
                        {rows.map(row => (
                            <TableRow key={row.role}>
                            <TableCell component="th" scope="row">
                                {row.role}
                            </TableCell>
                            <TableCell align="right">{row.inCost}</TableCell>
                            {/* <TableCell align="right">{row.outCost}</TableCell> */}

                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}> خارج الدوام</Paper>
                    <Divider/>
                    <Paper className={classes.paper}>
                    <Table className={classes.table}>
                        {/* <TableHead>
                        <TableRow>
                            <TableCell>الرئيس</TableCell>
                            <TableCell >الأمين</TableCell>
                            <TableCell >السكرتير</TableCell>
                            <TableCell >الأعضاء</TableCell>
                        </TableRow>
                        </TableHead> */}
                        <TableBody>
                        
                        {rows.map(row => (
                            <TableRow key={row.role}>
                            <TableCell component="th" scope="row">
                                {row.role}
                            </TableCell>
                            <TableCell align="right">{row.outCost}</TableCell>
                            {/* <TableCell align="right">{row.outCost}</TableCell> */}

                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </Paper>
                </Grid>
            </Grid>
            
        </div>
    );
}

export default TypeDetails;
