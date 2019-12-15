import React, {useEffect, useCallback,useState}from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as Actions from '../store/actions';
import {useDispatch, useSelector} from 'react-redux';

const defaultFormState = {
  type    : ''
};

function AlertDialog(props) {
  
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const alertDialog = useSelector(({majlestypesApp}) => majlestypesApp.majlestypes.alertDialog);
  
  const initDialog = useCallback(
    () => {
        /**
         * SetData 
         */
        if (alertDialog.data)
        {
            setData({...alertDialog.data});
        }
      }
    ,[alertDialog.data,setData],
);

useEffect(() => {
    /**
     * After Dialog Open
     */
    if ( alertDialog.props.open )
    {
        initDialog();
    }

}, [alertDialog.props.open, initDialog]);

function closeComposeDialog()
{
    dispatch(Actions.closeAlertDialog()) ;
}

function handleSubmit(event)
{
    event.preventDefault();

    if(data){
      const {id} = data;
      dispatch(Actions.deleteMajlesType(id)) 
    }

    closeComposeDialog();
}

  return (
    <div>
     
      <Dialog
        {...alertDialog.props}
            onClose={closeComposeDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"هل أنت متأكد من حذف نوع المجلس"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            بالضغط على تأكيد سيتم حذف النوع  والتصنيفات الخاصة بنوع المجلس: 
            {data.type}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeComposeDialog} color="primary">
            إلغاء
          </Button>
          <Button onClick={handleSubmit} color="primary" autoFocus>
            تأكيد
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialog;