import React, {useEffect, useCallback} from 'react';
import {TextField, Button, Dialog, DialogActions, DialogContent, Icon, IconButton, Typography, Toolbar, AppBar, Avatar} from '@material-ui/core';
import {useForm} from '@fuse/hooks';
import FuseUtils from '@fuse/FuseUtils';
import * as Actions from './store/actions';
import {useDispatch, useSelector} from 'react-redux';
import membersDB from './store/actions/memberDB'


const defaultFormState = {
    'id'        : '',
    'fname'     : '',
    'mname'     : '',
    'lname'     : '',
    'avatar'    : '',
    'nid'       : '',
    'employer'  : '',
    'jobTitle'  : '',
    'degree'    : '',
    'email'     : '',
    'phone'     : '',
    'address'   : '',
    'date'      : '',
    'notes'     : ''
};

function MemberDialog(props)
{
    const dispatch = useDispatch();
    const memberDialog =  useSelector(({membersApp}) => membersApp.members.memberDialog);

    const {form, handleChange, setForm} = useForm(defaultFormState);

    const initDialog = useCallback(
        () => {
            /**
             * Dialog type: 'edit'
             */
            if ( memberDialog.type === 'edit' && memberDialog.data )
            {
                setForm({...memberDialog.data});
            }

            /**
             * Dialog type: 'new'
             */
            if ( memberDialog.type === 'new' )
            {
                setForm({
                    ...defaultFormState,
                    ...MemberDialog.data,
                    id: FuseUtils.generateGUID()
                });
            }
        },
        [memberDialog.data, memberDialog.type, setForm],
    );

    useEffect(() => {
        /**
         * After Dialog Open
         */
        if ( memberDialog.props.open )
        {
            initDialog();
        }

    }, [memberDialog.props.open, initDialog]);

    function closeComposeDialog()
    {
        memberDialog.type === 'edit' ? dispatch(Actions.closeEditMemberDialog()) : dispatch(Actions.closeNewMemberDialog());
    }

    function canBeSubmitted()
    {
        return (
            form.name.length > 0
        );
    }

    function handleSubmit(event)
    {
        event.preventDefault();

        if ( memberDialog.type === 'new' )
        {
            dispatch(Actions.addMember(form));
        }
        else
        {
            dispatch(Actions.updateMember(form));
        }
        closeComposeDialog();
    }

    function handleRemove()
    {
        dispatch(Actions.removeMember(form.id));
        closeComposeDialog();
    }

    return (
        <Dialog
            classes={{
                paper: "m-24"
            }}
            {...memberDialog.props}
            onClose={closeComposeDialog}
            fullWidth
            maxWidth="xs"
        >

            <AppBar position="static" elevation={1}>
                <Toolbar className="flex w-full">
                    <Typography variant="subtitle1" color="inherit">
                        {memberDialog.type === 'new' ? 'مجلس جديد' : 'تعديل المجلس'}
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
                            label="اسم المجلس"
                            autoFocus
                            id="fname"
                            name="fname"
                            value={form.fname}
                            onChange={handleChange}
                            variant="outlined"
                            required
                            fullWidth
                        />
                    </div>

                    <div className="flex">
                        <div className="min-w-48 pt-20">
                            <Icon color="action">star</Icon>
                        </div>
                        <TextField
                            className="mb-24"
                            label="وصف المجلس"
                            id="lname"
                            name="lname"
                            value={form.lname}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                        />
                    </div>

                    <div className="flex">
                        <div className="min-w-48 pt-20">
                            <Icon color="action">star</Icon>
                        </div>
                        <TextField
                            className="mb-24"
                            label="التفعيل"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                </DialogContent>

                {memberDialog.type === 'new' ? (
                    <DialogActions className="justify-between pl-16">
                        <Button
                            variant="contained"
                            color="primary"
                            //onClick={handleSubmit}
                            //type="submit"
                            //disabled={!canBeSubmitted()}
                        >
                            تعديل
                        </Button>
                    </DialogActions>
                ) : (
                    <DialogActions className="justify-between pl-16">
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            //onClick={handleSubmit}
                            //disabled={!canBeSubmitted()}
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

export default MemberDialog;
