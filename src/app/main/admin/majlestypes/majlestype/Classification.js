import React, {useEffect, useState, useRef} from 'react';
import {TextField,Icon,Button, Divider,Table,TableBody, TableCell, TableRow,Card,Typography} from '@material-ui/core';
import {FuseAnimate, FusePageCarded, FuseChipSelect,FuseUtils} from '@fuse';
import { makeStyles } from '@material-ui/core/styles';
// import {withRouter} from 'react-router-dom';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import {useForm} from '@fuse/hooks';
import withReducer from 'app/store/withReducer';
import {Link} from 'react-router-dom';
import _ from '@lodash';
import {useDispatch, useSelector} from 'react-redux';
import reducer from '../store/reducers';
import * as Actions from '../store/actions';
import { showMessage } from 'app/store/actions';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      padding: 3
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
    button: {
        margin: theme.spacing(1),
      },

  }));

function Classification(props){
    
    const dispatch = useDispatch();
    const classes = useStyles();
    const classification = useSelector(({classificationApp}) => classificationApp.classification);
    const {form, handleChange, setForm} = useForm(null);
    const {type,id} = props.match.params

    useEffect(() => {
        function updateMajleType()
        {
            const params = props.match.params
            const {id} = params;
            if ( id === 'new' )
            {
              dispatch(Actions.newClassification())
          
           }
          else
          {
            dispatch(Actions.getCalssification(id));
          }
          
        }
        updateMajleType();
    }, [dispatch, props.match.params]);
  
    useEffect(() => {
      if (
          (classification.data && !form) ||
          (classification.data && form && classification.data.id !== form.id)
      )
      {
          setForm(classification.data);
          //form.majlesTypeId = 
      }
  }, [form, classification.data, setForm]);
  
  const handelSave = ()=> {
      const params = props.match.params
      const {id} = params;
      
      dispatch(Actions.saveClassification(form,id))

  }
  
  const canBeSubmitted = () => {
      
    return(form &&
        !_.isEqual(classification.data, form));
      }

return (<FusePageCarded
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
                                أنواع المجالس
                            </Typography>
                        </FuseAnimate>
                        
                        <div className="flex items-center max-w-full">
                        
                          <FuseAnimate animation="transition.expandIn" delay={300}>
                            {(form.majlesTypeId !==0)? 
                            (
                             <Icon className="text-32 mr-0 sm:mr-12">
                             account_balance
                             </Icon> 
                            )
                             : 
                             (<Icon className="text-32 mr-0 sm:mr-12">
                             account_balance_wallet
                             </Icon>
                             )}
                             </FuseAnimate>
  
                               
                              {/* <img className=" p-2 w-30 sm:w-48 mr-8 sm:mr-16 rounded" 
                              src="assets/images/ecommerce/product-image-placeholder.png" alt={form.type}/>
                                */}
                            <div className="flex flex-col min-w-0">
                            
                            <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                       
                                    <Typography className="text-16 sm:text-20 truncate "  >
                                        {type}
                                    </Typography>
                                </FuseAnimate>
                    
                            </div>
                        </div>
                    </div>
                   
                </div>
            )
        }   
        content= { 
           form && (
              <div>
              <div className={classes.paper}>
                  <Table>
                  <TableBody>
                      <TableRow>
                          <TableCell className='text-16' align="left" scope="row">
                                  <Typography className="text-16 sm:text-20 truncate font-bold mb-4">
                                      {type}
                                  </Typography>   
                          </TableCell>
                          <TableCell className='text-16' align="right" scope="row">
                          <Button
                              className={classes.button}
                              variant="outlined" 
                              color="default" 
                              disabled={!canBeSubmitted()}
                              onClick={handelSave}
                              >
                              <Icon>check</Icon>
                          </Button>
                          </TableCell>
                      </TableRow>
                      </TableBody>
                  </Table>    
             </div>
            <FuseAnimate
                animation="transition.fadeIn"
                duration={400}
                delay={400}
                >
                    <Card>
                    <div className={classes.paper} color="inherit">
                    <div >
                            <Typography variant="h2" className='font-bold mr-10 text-18'>مستحقات الأعضاء</Typography>
                    </div>
                        <FuseAnimate item xs={8} sm={12}>
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
                                                error={form.MSec_inCost === ''}
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
                        </FuseAnimate>
                        </div>
                    </Card>
                </FuseAnimate>
            </div>
           )
        }
      //   innerScroll
        />    
            
    );
         
    
}
export default withReducer('classificationApp', reducer)(Classification);

// export default withRouter(MajlesType);
