import React, {useEffect, useCallback, useState} from 'react';
import {TextField, Button, Dialog, DialogActions, DialogContent, Typography, Toolbar, AppBar,
    Table,TableBody, TableCell, TableRow,Card} from '@material-ui/core';
import {useForm} from '@fuse/hooks';
import {FuseAnimate,TextFieldFormsy} from '@fuse';
import Formsy from 'formsy-react';
import { makeStyles } from '@material-ui/core/styles';
import * as Actions from '../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { addValidationRule } from 'formsy-react';


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


function ClassificationDialog(props)
{
    const dispatch = useDispatch();
    const classificationDialog = useSelector(({classificationApp}) => classificationApp.classification.classificationDialog);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();
    const { majlesType } = props;
    const defaultFormState = {
        majlesTypeId    : majlesType.id,
        ceO_inCost      : '',
        ceO_outCost     : '',
        sec_inCost      : '',
        sec_outCost     : '', 
        mSec_inCost     : '',   
        mSec_outCost    : '',
        mem_inCost      : '',
        mem_outCost     : ''
};

    const [canSubmit, setcanSubmit] = useState(false);
    const {form, handleChange, setForm} = useForm(defaultFormState);
    /*
     *   add custom validation to TextFieldFormsy 
    */
    addValidationRule('isNotZero', function(values, value) {
        return value > 0;
      });
    const initDialog = useCallback(
        () => {
            /**
             * Dialog type: 'edit'
             */
            if ( classificationDialog.type === 'edit' && classificationDialog.data )
            {
                setForm({...classificationDialog.data});
            }
            /**
             * Dialog type: 'new'
             */
            if ( classificationDialog.type === 'new' )
            {
                setForm({
                    ...defaultFormState,
                    ...classificationDialog.data
                });
            }
        },
        [classificationDialog.data, classificationDialog.type, setForm],
    );

    useEffect(() => {
        /**
         * After Dialog Open
         */
        if ( classificationDialog.props.open )
        {
            initDialog();
        }

    }, [classificationDialog.props.open, initDialog]);

    function closeComposeDialog()
    {
        classificationDialog.type === 'edit' ? dispatch(Actions.closeEditClassificationDialog()) : dispatch(Actions.closeNewClassificationDialog());
    }

    const disableButton = () => {
        setcanSubmit(false);
    };

    const enableButton = () => {
      
        setcanSubmit(true);
        
    };

    function handleSubmit(event)
    {
        event.preventDefault();

        if ( classificationDialog.type === 'new' )
        {
            dispatch(Actions.addClassification(form));
        }
        else
        {
            dispatch(Actions.updateClassifiaction(form));
        }
        closeComposeDialog();
    }

    return (
        <Dialog
            classes={{
                 paper: "m-24"
            }}
            {...classificationDialog.props}
            onClose={closeComposeDialog}
            fullWidth
            // maxWidth="xs"
            aria-labelledby="responsive-dialog-title"
            fullScreen={fullScreen}
        >
        <AppBar position="static" elevation={1}>
                <Toolbar className="flex w-full">
                    <Typography variant="subtitle1" color="inherit">
                        {classificationDialog.type === 'new' ? 'اضافة تصنيف جديد' : 'تعديل التصنيف '}
                    </Typography>
                </Toolbar>
                <div className="flex flex-col items-center justify-center pb-24">
                    {/* <Avatar className="w-96 h-96" alt="contact avatar" >
                    <Icon className="text-32 mr-0 sm:mr-12">
                           account_balance
                    </Icon> </Avatar> */}
                    <Typography variant="h6" color="inherit" className="pt-8">
                        {majlesType.type}
                    </Typography>
                </div>
        </AppBar>
        {/* <form noValidate onSubmit={handleSubmit} className="flex flex-col overflow-hidden"> */}
        <Formsy
                    onValidSubmit={handleSubmit}
                    onValid={enableButton}
                    onInvalid={disableButton}
                    className="flex flex-col justify-center w-full"
        >
            <DialogContent classes={{root: "p-24"}}>
                    <div className="flex">
                    <Card>
                    <div  color="inherit">
                    <div className={classes.paper}>
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
                                            <TextFieldFormsy
                                            className="mt-8 mb-16"
                                            validations="isNotZero"
                                            validationErrors="القيمة غير صحيح"
                                            required
                                            label="الإستحقاق وقت الدوام"
                                            autoFocus
                                            id="ceO_inCost"
                                            name="ceO_inCost"
                                            value={form.ceO_inCost}
                                            onChange={handleChange}
                                            variant="outlined"
                                            type="number"

                                            />
                                        </TableCell>
                                        <TableCell >
                                            <TextField
                                                className="mt-8 mb-16"
                                                error={form.ceO_outCost === 0}
                                                required
                                                label="الإستحقاق خارج وقت الدوام"
                                                autoFocus
                                                id="ceO_outCost"
                                                name="ceO_outCost"
                                                value={form.ceO_outCost}
                                                onChange={handleChange}
                                                variant="outlined"
                                                type="number"
                                                validations="isNotZero"
                                                validationError="القيمة غير صحيح"

                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell className='text-16' align="center" scope="row">
                                            الأمين 
                                        </TableCell>
                                        <TableCell >
                                            <TextFieldFormsy
                                                className="mt-8 mb-16"
                                                error={form.sec_inCost === 0}
                                                required
                                                label="الإستحقاق وقت الدوام"
                                                autoFocus
                                                id="sec_inCost"
                                                name="sec_inCost"
                                                value={form.sec_inCost}
                                                onChange={handleChange}
                                                variant="outlined"
                                                type="number"
                                                validations="isNotZero"
                                                validationError="القيمة غير صحيح"
                                                
                                            />
                                        </TableCell>
                                        <TableCell >
                                            <TextFieldFormsy
                                                className="mt-8 mb-16"
                                                error={form.sec_outCost === 0}
                                                required
                                                label="الإستحقاق خارج وقت الدوام"
                                                autoFocus
                                                id="sec_outCost"
                                                name="sec_outCost"
                                                value={form.sec_outCost}
                                                onChange={handleChange}
                                                variant="outlined"
                                                type="number"
                                                validations="isNotZero"
                                                validationError="القيمة غير صحيح"

                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell className='text-16' align="center" scope="row">
                                            السكرتير 
                                        </TableCell>
                                        <TableCell >
                                            <TextFieldFormsy
                                                className="mt-8 mb-16"
                                                error={form.MSec_inCost === 0}
                                                required
                                                label="الإستحقاق وقت الدوام"
                                                autoFocus
                                                id="mSec_inCost"
                                                name="mSec_inCost"
                                                value={form.mSec_inCost}
                                                onChange={handleChange}
                                                variant="outlined"
                                                type="number"
                                                validations="isNotZero"
                                                validationError="القيمة غير صحيح"
                                                
                                            />
                                        </TableCell>
                                        <TableCell >
                                            <TextFieldFormsy
                                                className="mt-8 mb-16"
                                                error={form.mSec_outCost === 0}
                                                required
                                                label="الإستحقاق خارج وقت الدوام"
                                                autoFocus
                                                id="mSec_outCost"
                                                name="mSec_outCost"
                                                value={form.mSec_outCost}
                                                onChange={handleChange}
                                                variant="outlined"
                                                type="number"
                                                validations="isNotZero"
                                                validationError="القيمة غير صحيح"
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell className='text-16' align="center" scope="row">
                                            العضو 
                                        </TableCell>
                                        <TableCell >
                                            <TextFieldFormsy
                                                className="mt-8 mb-16"
                                                error={form.mem_inCost === 0}
                                                required
                                                label="الإستحقاق وقت الدوام"
                                                autoFocus
                                                id="mem_inCost"
                                                name="mem_inCost"
                                                value={form.mem_inCost}
                                                onChange={handleChange}
                                                variant="outlined"
                                                type="number"
                                                validations="isNotZero"
                                                validationError="القيمة غير صحيح"
                                                
                                            />
                                        </TableCell>
                                        <TableCell >
                                            <TextFieldFormsy
                                                className="mt-8 mb-16"
                                                error={form.mem_outCost === 0}
                                                required
                                                label="الإستحقاق خارج وقت الدوام"
                                                autoFocus
                                                id="mem_outCost"
                                                name="mem_outCost"
                                                value={form.mem_outCost}
                                                onChange={handleChange}
                                                variant="outlined"
                                                type="number"
                                                validations="isNotZero"
                                                validationError="القيمة غير صحيح"
                                            />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </FuseAnimate>
                        </div>
                    </Card>
                    </div>
                </DialogContent>

                {classificationDialog.type === 'new' ? (
                    <DialogActions className="justify-between pl-16">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            type="submit"
                            disabled={!canSubmit}
                        >
                            اضافة
                        </Button>
                    </DialogActions>
                ) : (
                    <DialogActions className="justify-between pl-16">
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            onClick={handleSubmit}
                             disabled={!canSubmit}
                        >
                            حفظ
                        </Button>
                    </DialogActions>
                )}
            </Formsy>
        </Dialog>
    );
}

export default ClassificationDialog;// withReducer('classificationApp', reducer)(ClassificationDialog);
