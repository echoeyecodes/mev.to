import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function PollSuccessfulDialog(props) {

  return (
    <div>
      <Dialog
        open={props.show}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Operation was successful"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           The poll session is live!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" autoFocus>
          <a style={{textDecorationLine: 'none', textDecorationColor: '#663399'}} href={`/?${props.info}`}>
          Copy to clipboard and continue
          </a>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
