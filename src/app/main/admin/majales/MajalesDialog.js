import React, {useEffect, useCallback} from 'react';
import {TextField, Button, Dialog, DialogActions, DialogContent, Icon, IconButton, Typography, Toolbar, AppBar, InputLabel,Select,MenuItem  } from '@material-ui/core';
import {useForm} from '@fuse/hooks';
import FuseUtils from '@fuse/FuseUtils';
import * as Actions from './store/actions';
import {useDispatch, useSelector} from 'react-redux';




const defaultFormState = {
    id:'',
    title    : '',
    description: '',
    owner  : '',
    majlesTypeId: 1,
    activeStatus : true

};


function MajalesDialog(props)
{
    const dispatch = useDispatch();
    const majalesDialog = useSelector(({majalesApp}) => majalesApp.majales.majalesDialog);
    var allmajelstype = useSelector(({majalesApp}) => majalesApp.majales.majalestypes);


    const {form, handleChange, setForm} = useForm(defaultFormState);

    const initDialog = useCallback(
        () => {
            if ( majalesDialog.type === 'edit' && majalesDialog.data )
            {
                setForm({...majalesDialog.data});
            }

            if ( majalesDialog.type === 'new' )
            {
                setForm({
                    ...defaultFormState,
                    ...majalesDialog.data
                });
            }
        },
        [majalesDialog.data, majalesDialog.type, setForm],
    );

    useEffect(() => {

        if ( majalesDialog.props.open )
        {
            initDialog();
        }

    }, [majalesDialog.props.open, initDialog]);

    function closeComposeDialog()
    {
        majalesDialog.type === 'edit' ? dispatch(Actions.closeEditMajlesDialog()) : dispatch(Actions.closeNewMajlesDialog());
    }

    function canBeSubmitted()
    {
        return (
            form.title.length > 0
        );
    }

    function handleSubmit(event)
    {
        event.preventDefault();

        if ( majalesDialog.type === 'new' )
        {
            dispatch(Actions.addMajles(form));
        }
        else
        {
            dispatch(Actions.updateMajles(form));
        }
        closeComposeDialog();
    }

    function handleRemove()
    {
        dispatch(Actions.removeMajles(form.id));
        closeComposeDialog();
    }
    return (
        <Dialog
            classes={{
                paper: "m-24"
            }}
            {...majalesDialog.props}
            onClose={closeComposeDialog}
            fullWidth
            maxWidth="xs"
        >

            <AppBar position="static" elevation={1}>
                <Toolbar className="flex w-full">
                    <Typography variant="subtitle1" color="inherit">
                        {majalesDialog.type === 'new' ? 'مجلس جديد' : 'تحرير المجلس'}
                    </Typography>
                </Toolbar>
            </AppBar>
            <form noValidate onSubmit={handleSubmit} className="flex flex-col overflow-hidden">
                <DialogContent classes={{root: "p-24"}}>
                    <div className="flex">
                        <div className="min-w-48 pt-20">
                            <Icon color="action">account_circle</Icon>
                        </div>

                        <TextField
                            className="mb-24"
                            label="العنوان"
                            autoFocus
                            id="title"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            variant="outlined"
                            required
                            fullWidth
                        />
                    </div>

                    <div className="flex">
                        <div className="min-w-48 pt-20">
                        </div>
                        <TextField
                            className="mb-24"
                            label="الوصف"
                            id="description"
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                        />
                    </div>

                    <div className="flex">
                        <div className="min-w-48 pt-20">
                            <Icon color="action">phone</Icon>
                        </div>
                        <TextField
                            className="mb-24"
                            label="المالك"
                            id="owner"
                            name="owner"
                            value={form.owner}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                        />
                    </div>

                    <div className="flex">
                        <div className="min-w-48 pt-20">
                            <Icon color="action">domain</Icon>
                        </div>
                        <Select
                            className="mb-24"
                            label="انواع المجالس"
                            autoWidth={false}
                            value={form.majlesTypeId}
                            onChange={handleChange}
                            inputProps={{
                                name: 'majlesTypeId',
                                id: 'majlesTypeId',
                            }}
                        >
                            {allmajelstype.map(mtype => {
                                return (
                                    <MenuItem key={mtype.id} value={mtype.id}>{mtype.type}</MenuItem>
                                )
                            })}

                        </Select>
                    </div>

                </DialogContent>

                {majalesDialog.type === 'new' ? (
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
                        <IconButton
                            onClick={handleRemove}
                        >
                            <Icon>حذف</Icon>
                        </IconButton>
                    </DialogActions>
                )}
            </form>
        </Dialog>
    );
}

export default MajalesDialog;
