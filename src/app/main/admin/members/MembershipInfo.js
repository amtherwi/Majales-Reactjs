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

function MembershipInfo(props)
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
                        {memberDialog.type === 'new' ? 'New Contact' : 'Edit Contact'}
                    </Typography>
                </Toolbar>
                <div className="flex flex-col items-center justify-center pb-24">
                    <Avatar className="w-96 h-96" alt="contact avatar" src={form.avatar}/>
                    {memberDialog.type === 'edit' && (
                        <Typography variant="h6" color="inherit" className="pt-8">
                            {form.name}
                        </Typography>
                    )}
                </div>
            </AppBar>
            <form noValidate onSubmit={handleSubmit} className="flex flex-col overflow-hidden">
                <DialogContent classes={{root: "p-24"}}>
                    <div className="flex">
                        <div className="min-w-48 pt-20">
                            <Icon color="action">account_circle</Icon>
                        </div>

                        <TextField
                            className="mb-24"
                            label="الاسم"
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
                        </div>
                        <TextField
                            className="mb-24"
                            label="الأب"
                            id="mname"
                            name="mname"
                            value={form.mname}
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
                            label="العائلة"
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
                            <Icon color="action">phone</Icon>
                        </div>
                        <TextField
                            className="mb-24"
                            label="الجوال"
                            id="phone"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                        />
                    </div>

                    <div className="flex">
                        <div className="min-w-48 pt-20">
                            <Icon color="action">email</Icon>
                        </div>
                        <TextField
                            className="mb-24"
                            label="البريد الاكتروني"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                        />
                    </div>

                    <div className="flex">
                        <div className="min-w-48 pt-20">
                            <Icon color="action">domain</Icon>
                        </div>
                        <TextField
                            className="mb-24"
                            label="الكلية/المعهد"
                            id="employer"
                            name="employer"
                            value={form.employer}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                        />
                    </div>

                    <div className="flex">
                        <div className="min-w-48 pt-20">
                            <Icon color="action">work</Icon>
                        </div>
                        <TextField
                            className="mb-24"
                            label="الوظيفة"
                            id="jobTitle"
                            name="jobTitle"
                            value={form.jobTitle}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                        />
                    </div>

                    <div className="flex">
                        <div className="min-w-48 pt-20">
                            <Icon color="action">cake</Icon>
                        </div>
                        <TextField
                            className="mb-24"
                            id="الدرجة العلمية"
                            label="Degree"
                            type="degree"
                            value={form.degree}
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true
                            }}
                            variant="outlined"
                            fullWidth
                        />
                    </div>

                    <div className="flex">
                        <div className="min-w-48 pt-20">
                            <Icon color="action">home</Icon>
                        </div>
                        <TextField
                            className="mb-24"
                            label="العنوان"
                            id="address"
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                        />
                    </div>

                    <div className="flex">
                        <div className="min-w-48 pt-20">
                            <Icon color="action">note</Icon>
                        </div>
                        <TextField
                            className="mb-24"
                            label="ملاحظات"
                            id="notes"
                            name="notes"
                            value={form.notes}
                            onChange={handleChange}
                            variant="outlined"
                            multiline
                            rows={5}
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
                            Add
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
                            Save
                        </Button>
                        <IconButton
                            onClick={handleRemove}
                        >
                            <Icon>delete</Icon>
                        </IconButton>
                    </DialogActions>
                )}
            </form>
        </Dialog>
    );
}

export default MembershipInfo;
