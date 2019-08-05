import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Firebase from 'firebase'

export default function AlertDialog(props) {

  function signIn() {
    if (typeof window !== 'undefined') {
      // all of your firebase code in here
      var provider = new Firebase.auth.GoogleAuthProvider();

      Firebase.auth().signInWithPopup(provider).then(result => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // The signed-in user info.
          var user = result.user;
          let id = Firebase.database().ref().child('users')
          id.push().child('name').set(user.uid)
          // ...
        }).catch( error => {
          // Handle Errors here.
          alert(error.errorMessage)
        });
  }
  
  }

  return (
    <div>
      <Dialog
        open={props.show}
        onClose={props.show}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"You need to be logged in"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Your unique id helps us analyze poll results and deliver accurate statistics.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={signIn} color="primary" autoFocus>
            Log in with Google
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
