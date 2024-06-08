import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CrGrid from './CrGrid';


interface Props {
    open: boolean;
    handleClose: () => void,
    title: string;
    description: string;
    image: string;
    nombreButton: string;
  }

export default function CrModal({open, handleClose, title, description, image, nombreButton}: Props) {


  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        </DialogTitle>
        <DialogContent>
          <CrGrid title={title}  description = {description}  image = {image}>
          </CrGrid>
          <DialogContentText id="alert-dialog-description">

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            {nombreButton}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
