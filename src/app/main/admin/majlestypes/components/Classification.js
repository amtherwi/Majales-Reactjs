import React, {useEffect, useState} from 'react';
import {Table,TableBody, TableCell, TableRow,IconButton , Button, Typography, Icon} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import * as Actions from '../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import withReducer from 'app/store/withReducer';
import reducer from '../store/reducers';
import ClassificationDialog from './ClassificationDialog'
import { setNavigation } from 'app/store/actions';


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

function Classification(props) {
  
  const dispatch = useDispatch();
  const classification = useSelector(({classificationApp}) => classificationApp.classification.data);
  const classes = useStyles();
  const [data, setData] = useState({});
  const { majlesType } = props;
  const [noResult, setnoResult] = useState(true);
  

  useEffect(() => {
 
      dispatch(Actions.getCalssification(majlesType.id))
      .then(result => {
        if(!result){
          setnoResult(false)
        }
      })
     
  },[dispatch, majlesType.id]);

  useEffect(() => {
    if(noResult===false) {
    setData(classification)
    }
}, [classification, noResult]);


  function createData(id,role, inCost, outCost) {
        return { id, role, inCost, outCost };
      }
      const rows = [

        createData(data.id,'الرئيس', data.ceO_inCost, data.ceO_outCost),
        createData(data.id+1,'الأمين', data.sec_inCost, data.sec_outCost),
        createData(data.id+2,'السكرتير', data.mSec_inCost, data.mSec_outCost),
        createData(data.id+3,'الأعضاء', data.mem_inCost, data.mem_outCost),
       
      ];
  
    
    function handelDelete(event){
      dispatch(Actions.deleteClassification(data.id))
      //this.props.forceUpdate();
      
    }
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
                            <TableCell align="center">{row.outCost}</TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                        
                        </TableRow>
                        </TableBody>
                    </Table>
                    {/* </Paper> */}
                </Grid>
                <Grid item xs={12} variant="subtitle1" color="inherit">
                    <Paper  className={classes.paper} style={{    backgroundColor: 'rgba(0, 1, 0, .03)',}}>
                    <IconButton 
                        // key={type.id}
                        //variant="outlined" 
                        color="primary" 
                        className={classes.button}
                        onClick={ev => dispatch(Actions.openEditClassificationDialog(data))}
                        >
                            <Icon>edit</Icon>
                        </IconButton>
                        <IconButton  
                        //variant="outlined" 
                        color="inherit" 
                        className={classes.button}
                        onClick={handelDelete}
                        >
                        <Icon>delete</Icon>
                        </IconButton>                    
                    </Paper>
                </Grid>
            </Grid>
      
            :
            <div className="flex flex-auto items-center justify-center w-full h-full">
            <Grid container spacing={4} className={classes.paper}>
              <Grid item xs={12} variant="subtitle1" color="inherit">
                <Typography color="textSecondary" variant="h5">
                  لا يوجد تصنيفات  !!
                </Typography>
              </Grid>
            
            <Grid item xs={12} variant="subtitle1" color="inherit">
            <Button
                className={classes.button}
                variant="outlined" 
                color="primary" 
                onClick={ev => dispatch(Actions.openNewClassificationDialog())}
                >
                <Typography>
                    اضافة تصنيف
                </Typography>
              </Button>
            </Grid> 
          </Grid>
                                            
            </div>           
         }
            
         <ClassificationDialog majlesType={majlesType}/>

        </div>
    );
}

export default withReducer('classificationApp', reducer)(Classification);