import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Form } from 'reactstrap';

import './DialogModal.css';
const DialogModal = ({ modal, toggle, title, children, onSubmitNewCategory }) => {
    console.log('modal', modal);
    return (
        <form className="DialogModal">
            <Dialog open={modal} onClose={toggle} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create {title}</DialogTitle>
                <DialogContent>{children}</DialogContent>
                <DialogActions>
                    <Button onClick={toggle} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onSubmitNewCategory} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </form>
    );
};

export default DialogModal;
