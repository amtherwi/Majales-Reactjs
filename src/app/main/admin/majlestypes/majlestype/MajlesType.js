import React, {useEffect, useState, useRef} from 'react';
import {TextField,Icon,Button, Divider,Table,TableBody, TableCell, TableRow, Typography} from '@material-ui/core';
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

function MajlesType(props){
    const {type,id} = props.match.params
    const dispatch = useDispatch();
    const classes = useStyles();
    const majlestype = useSelector(({majlestypeApp}) => majlestypeApp.majlestype);
    const {form, handleChange, setForm} = useForm(null);
    const [ishidden, setIsHidden] = useState(()=> id==='new'? true:false);
    const [mtdata, setMtData] = useState({});
     const [editable, setEditable] = useState(false);
    
    useEffect(() => {
      function updateMajleType()
      {
        const params = props.match.params
        const {id} = params;
          if ( id === 'new' )
          {
              dispatch(Actions.newMajlesType())
          
           }
          else
          {
            dispatch(Actions.getMajlesTypeById(id));
          }
      }

      updateMajleType();
    }, [dispatch, props.match.params]);

    useEffect(() => {
        if (
            (majlestype.data && !form) ||
            (majlestype.data && form && majlestype.data.id !== form.id)
        )
        {
            setForm(majlestype.data);
        }
    }, [form, majlestype.data, setForm]);

const handelSave = ()=> {

    const params = props.match.params
    const {id} = params;
    setIsHidden(false);
    setEditable(true);

    dispatch(Actions.saveMajlesType(form,id));
   
    
}
 
const canBeSubmitted = () => {

    return((form.type &&
               !_.isEqual(majlestype.data, form)) );
    }
function handleClick()
    {
        if(id === 'new'){
        const { type } = form;
        console.log('23type',type)


        dispatch(Actions.getMajlesType(type))
        .then((majlestype) => {
                setMtData(majlestype.payload)
                const {id} = mtdata;
                
                });
        if(mtdata.id){
                    props.history.push('/admin/classifications/' + mtdata.id + '/' + mtdata.type);
        }
        console.log('dataddd',mtdata) 
        } else{
            console.log('majlestype',majlestype)
            //if(majlestype. && majlestype.type){
            const {id,type} = majlestype.data;
            console.log('id',id)
            console.log('type',type)

    

        }

    }

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
                              أنواع المجالس
                          </Typography>
                      </FuseAnimate>
                      
                      <div className="flex items-center max-w-full">
                      
                        <FuseAnimate animation="transition.expandIn" delay={300}>
                          {form.type ? 
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

                          <div className="flex flex-col min-w-0">
                              <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                  <Typography className="text-16 sm:text-20 truncate">
                                      { form.type ? form.type : 'اضافة جديد'}
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
                                <TextField
                                className="mt-8 mb-16"
                                error={form.type === ''}
                                required
                                label="نوع المجلس"
                                autoFocus
                                id='type'
                                name='type'
                                value={form.type}
                                onChange={handleChange}
                                variant="outlined"
                                disabled={editable}
                                
                            />          
                        </TableCell>
                        <TableCell className='text-16' align="left" scope="row">
                        <Button
                                    className={classes.button}
                                    variant="outlined" 
                                    color="primary" 
                                    //disabled={!canBeSubmitted()}
                                    onClick={handleClick}
                                    hidden = {ishidden}
                                    >
                                    <Typography>
                                        التصنيفات
                                    </Typography>
                        </Button>
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
        </div>
         )
      }
    //   innerScroll
      />    
     
    );
}
export default withReducer('majlestypeApp', reducer)(MajlesType);