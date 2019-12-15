import React, {useEffect, useCallback} from 'react';
import {TextField, Button, Dialog, DialogActions, DialogContent, Icon, IconButton, Typography, Toolbar, AppBar, Avatar} from '@material-ui/core';
import {useForm} from '@fuse/hooks';
// import FuseUtils from '@fuse/FuseUtils';
import _ from '@lodash';
import * as Actions from '../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const defaultFormState = {
    type    : ''
};

function MajlesTypeDialog(props)
{
    const dispatch = useDispatch();
    const majlestypeDialog = useSelector(({majlestypesApp}) => majlestypesApp.majlestypes.majlestypeDialog);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
    const {form, handleChange, setForm} = useForm(defaultFormState);

    const initDialog = useCallback(
        () => {
            /**
             * Dialog type: 'edit'
             */
            if ( majlestypeDialog.type === 'edit' && majlestypeDialog.data )
            {
                setForm({...majlestypeDialog.data});
            }
            /**
             * Dialog type: 'new'
             */
            if ( majlestypeDialog.type === 'new' )
            {
                setForm({
                    ...defaultFormState,
                    ...majlestypeDialog.data
                });
            }
        },
        [majlestypeDialog.data, majlestypeDialog.type, setForm],
    );

    useEffect(() => {
        /**
         * After Dialog Open
         */
        if ( majlestypeDialog.props.open )
        {
            initDialog();
        }

    }, [majlestypeDialog.props.open, initDialog]);

    function closeComposeDialog()
    {
        majlestypeDialog.type === 'edit' ? dispatch(Actions.closeEditMajlestypeDialog()) : dispatch(Actions.closeNewMajlestypeDialog());
    }

    function canBeSubmitted()
    {
        return(form.type.length > 0 &&
            !_.isEqual(majlestypeDialog.data, form));

    }

    function handleSubmit(event)
    {
        event.preventDefault();

        if ( majlestypeDialog.type === 'new' )
        {
            dispatch(Actions.addMajlesType(form));
        }
        else
        {
            dispatch(Actions.updateMajlestype(form));
        }
        closeComposeDialog();
    }

    return (
        <Dialog
            classes={{
                paper: "m-24"
            }}
            {...majlestypeDialog.props}
            onClose={closeComposeDialog}
            fullWidth
            maxWidth="xs"
            aria-labelledby="responsive-dialog-title"
            fullScreen={fullScreen}
        >
        <AppBar position="static" elevation={1}>
                <Toolbar className="flex w-full">
                    <Typography variant="subtitle1" color="inherit">
                        {majlestypeDialog.type === 'new' ? 'اضافة نوع مجلس جديد' : 'تعديل نوع المجلس'}
                    </Typography>
                </Toolbar>
                <div className="flex flex-col items-center justify-center pb-24">
                    {/* <Avatar className="w-96 h-96" alt="contact avatar" >
                    <Icon className="text-32 mr-0 sm:mr-12">
                           account_balance
                           </Icon> </Avatar> */}
                    {majlestypeDialog.type === 'edit' && (
                        <Typography variant="h6" color="inherit" className="pt-8">
                            {form.type}
                        </Typography>
                    )}
                </div>
        </AppBar>
        <form noValidate onSubmit={handleSubmit} className="flex flex-col overflow-hidden">
                <DialogContent classes={{root: "p-24"}}>
                    <div className="flex">
                        <div className="min-w-48 pt-20">
                            <Icon color="action">blur_circular
</Icon>
                        </div>

                        <TextField
                            className="mb-24"
                            label="نوع المجلس"
                            autoFocus
                            id="type"
                            name="type"
                            value={form.type}
                            onChange={handleChange}
                            variant="outlined"
                            required
                            fullWidth
                        />
                    </div>
                </DialogContent>

                {majlestypeDialog.type === 'new' ? (
                    <DialogActions className="justify-between pl-16">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            type="submit"
                            disabled={!canBeSubmitted()}
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
                            disabled={!canBeSubmitted()}
                        >
                            حفظ
                        </Button>
                    </DialogActions>
                )}
            </form>
        </Dialog>
    );
}

export default MajlesTypeDialog;
