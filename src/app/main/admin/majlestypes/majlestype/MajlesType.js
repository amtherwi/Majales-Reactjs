import React, {useEffect, useState} from 'react';
import {TextField,Icon,Button, Divider,Table,TableBody, TableCell, TableRow, Typography} from '@material-ui/core';
import {FuseAnimate, FusePageCarded, FuseChipSelect,FuseUtils} from '@fuse';
import { makeStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useForm} from '@fuse/hooks';
import withReducer from 'app/store/withReducer';
import {Link} from 'react-router-dom';
import _ from '@lodash';
import {useDispatch, useSelector} from 'react-redux';
import reducer from '../store/reducers';
import * as Actions from '../store/actions';

// import axios from 'axios';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      padding: 3
    },
    paper: {
      padding: theme.spacing(2),
    //   textAlign: 'center',
      color: theme.palette.text.primary,
      
    },
  }));
//   "md:flex max-w-2xl"

const MajlesType = (props) => {
  
  const dispatch = useDispatch();
  // const product = useSelector(({eCommerceApp}) => eCommerceApp.product);

//    const [tabValue, setTabValue] = useState(0);
   const {form, handleChange, setForm} = useForm(null);
    const classes = useStyles();
    const [data, setData] = useState({});
    // const [hasError, setError] = useState(false);
    // const majlestype =  useSelector(({majlestypesApp}) => majlestypesApp);
    
    const {type,id} = props.match.params
    
  useEffect(() => {
      function updateMajleType()
      {
        const params = props.match.params
        const {id} = params;
          if ( id === 'new' )
          {
              dispatch(Actions.newMajlesType());
            //   setForm(null)
           }
          else
          {
              dispatch(Actions.getCalssification(id))
              .then(data => setData(data.payload)) 
          }

      }

      updateMajleType();
  }, [dispatch, id, props.match.params]);


   useEffect(() => {
    if (
        (data && !form) ||
        (data && form && data.id !== form.id)
    )
    {
      //   const filteredDate = data.map(x => x.majlesType.type === type )
        setForm(data);
    }
      
  }, [form, data, setForm]);

  
  if(form && form.majlesType){
      
        console.log('form is : ',form);
        // var typpe = form.majlesType.type;
      
    
    }


  function canBeSubmitted()
  {
      return (
        //   type > 0 &&
          !_.isEqual(data, form)
      );
  }
//   console.log('Can be Submitted : ',canBeSubmitted())
    return (
      <FusePageCarded
      classes={{
          toolbar: "p-0",
          header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
      }}
      header={
          form && (
              <div className="flex flex-1 w-full items-center justify-between">

                  <div className="flex flex-col items-start max-w-full">

                      <FuseAnimate animation="transition.slideRightIn" delay={300}>
                          <Typography className="text-16 font-bold normal-case flex items-center sm:mb-12" component={Link} role="button" to="/admin/majlestypes" color="inherit">
                              <Icon className="mr-4 text-20">arrow_forward</Icon>
                              التصنيفات
                          </Typography>
                      </FuseAnimate>
                      
                      <div className="flex items-center max-w-full">
                      {form.majlesType ? 
                          <FuseAnimate animation="transition.expandIn" delay={300}>
                           <Icon className="text-32 mr-0 sm:mr-12">
                           account_balance
                           </Icon>
                           </FuseAnimate>
                           : 
                           <FuseAnimate animation="transition.expandIn" delay={300}>
                           <Icon className="text-32 mr-0 sm:mr-12">
                           account_balance_wallet
                           </Icon>
                           </FuseAnimate>
                           }   
                            {/* <img className=" p-2 w-30 sm:w-48 mr-8 sm:mr-16 rounded" 
                            src="assets/images/ecommerce/product-image-placeholder.png" alt={form.type}/>
                              */}
                          <div className="flex flex-col min-w-0">
                              <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                  <Typography className="text-16 sm:text-20 truncate">
                                      {form.majlesType ? form.majlesType.type : 'اضافة جديد'}
                                  </Typography>
                              </FuseAnimate>
                              {/* <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                  <Typography variant="caption"> تفاصيل التصنيف</Typography>
                              </FuseAnimate> */}
                          </div>
                      </div>
                  </div>
                  <FuseAnimate animation="transition.slideRightIn" delay={300}>
                      <Button
                          className="whitespace-no-wrap"
                          variant="contained"
                          disabled={!canBeSubmitted()}
                          onClick={() => dispatch(Actions.saveMajlesType(form,id))}
                      >
                          حفظ
                      </Button>
                  </FuseAnimate>
              </div>
          )
      }
    
      content={ 
        form && (
            <div >
            <FuseAnimate>
                <Paper className={classes.paper}>
                <TextField
                    className="mt-8 mb-16"
                    error={form.majlesType === ''}
                    required
                    label="نوع المجلس"
                    autoFocus
                    id='majlesType'
                    name='majlesType'
                    value={form.majlesType?  form.majlesType.type : form.majlesType}
                    onChange={handleChange}
                    variant="outlined"
                    
                />
                
                </Paper>
            </FuseAnimate>
            
           
            <Grid item xs={12} variant="subtitle1" color="inherit">
                
                    <Paper  className={classes.paper} style={{    backgroundColor: 'rgba(0, 1, 0, .03)',padding:'70'}}>
                    <Typography className='font-bold mb-16 mt-12 mr-10 text-15'>مستحقات الأعضاء</Typography>
                    </Paper>
                
                <FuseAnimate item xs={8} sm={12}>
                    {/* <Paper className={classes.paper}>وقت الدوام </Paper>
                    <Divider /> */}
                    {/* <Paper className={classes.paper}> */}
 
                    <Table >
                       
                        <TableBody>
                        
                            <TableRow>
                                <TableCell className='text-16' align="center" scope="row">
                                    الرئيس  
                                </TableCell>
                                <TableCell >
                                    <TextField
                                        className="mt-8 mb-16"
                                        error={form.ceO_inCost === ''}
                                        required
                                        label="الإستحقاق وقت الدوام"
                                        autoFocus
                                        id="ceO_inCost"
                                        name="ceO_inCost"
                                        value={form.ceO_inCost}
                                        onChange={handleChange}
                                        variant="outlined"
                                        
                                    />
                                </TableCell>
                                {/* <TableCell align="right">{row.outCost}</TableCell> */}
                                {/* <TableCell align="center">{form.outCost}</TableCell> */}
                                <TableCell >
                                    <TextField
                                        className="mt-8 mb-16"
                                        error={form.ceO_outCost === ''}
                                        required
                                        label="الإستحقاق خارج وقت الدوام"
                                        autoFocus
                                        id="ceO_outCost"
                                        name="ceO_outCost"
                                        value={form.ceO_outCost}
                                        onChange={handleChange}
                                        variant="outlined"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell className='text-16' align="center" scope="row">
                                     الأمين 
                                </TableCell>
                                <TableCell >
                                    <TextField
                                        className="mt-8 mb-16"
                                        error={form.sec_inCost === ''}
                                        required
                                        label="الإستحقاق وقت الدوام"
                                        autoFocus
                                        id="sec_inCost"
                                        name="sec_inCost"
                                        value={form.sec_inCost}
                                        onChange={handleChange}
                                        variant="outlined"
                                        
                                    />
                                </TableCell>
                                {/* <TableCell align="right">{row.outCost}</TableCell> */}
                                {/* <TableCell align="center">{form.outCost}</TableCell> */}
                                <TableCell >
                                    <TextField
                                        className="mt-8 mb-16"
                                        error={form.sec_outCost === ''}
                                        required
                                        label="الإستحقاق خارج وقت الدوام"
                                        autoFocus
                                        id="sec_outCost"
                                        name="sec_outCost"
                                        value={form.sec_outCost}
                                        onChange={handleChange}
                                        variant="outlined"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell className='text-16' align="center" scope="row">
                                     السكرتير 
                                </TableCell>
                                <TableCell >
                                    <TextField
                                        className="mt-8 mb-16"
                                        error={form.mSec_inCost === ''}
                                        required
                                        label="الإستحقاق وقت الدوام"
                                        autoFocus
                                        id="mSec_inCost"
                                        name="mSec_inCost"
                                        value={form.mSec_inCost}
                                        onChange={handleChange}
                                        variant="outlined"
                                        
                                    />
                                </TableCell>
                                {/* <TableCell align="right">{row.outCost}</TableCell> */}
                                {/* <TableCell align="center">{form.outCost}</TableCell> */}
                                <TableCell >
                                    <TextField
                                        className="mt-8 mb-16"
                                        error={form.mSec_outCost === ''}
                                        required
                                        label="الإستحقاق خارج وقت الدوام"
                                        autoFocus
                                        id="mSec_outCost"
                                        name="mSec_outCost"
                                        value={form.mSec_outCost}
                                        onChange={handleChange}
                                        variant="outlined"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell className='text-16' align="center" scope="row">
                                     العضو 
                                </TableCell>
                                <TableCell >
                                    <TextField
                                        className="mt-8 mb-16"
                                        error={form.mem_inCost === ''}
                                        required
                                        label="الإستحقاق وقت الدوام"
                                        autoFocus
                                        id="mem_inCost"
                                        name="mem_inCost"
                                        value={form.mem_inCost}
                                        onChange={handleChange}
                                        variant="outlined"
                                        
                                    />
                                </TableCell>
                                {/* <TableCell align="right">{row.outCost}</TableCell> */}
                                {/* <TableCell align="center">{form.outCost}</TableCell> */}
                                <TableCell >
                                    <TextField
                                        className="mt-8 mb-16"
                                        error={form.mem_outCost === ''}
                                        required
                                        label="الإستحقاق خارج وقت الدوام"
                                        autoFocus
                                        id="mem_outCost"
                                        name="mem_outCost"
                                        value={form.mem_outCost}
                                        onChange={handleChange}
                                        variant="outlined"
                                    />
                                </TableCell>
                            </TableRow>

                       
                        </TableBody>
                    </Table>
                    {/* </Paper> */}
                </FuseAnimate>
                </Grid>
                
        </div>
         )
      }
      innerScroll
      />    
     
    );
}
export default withReducer('majlestypesApp', reducer)(MajlesType);

// export default withRouter(MajlesType);
