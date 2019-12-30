import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';
import './AlertsDialogModal.css';
export default function AlertsDialogModal(props: any) {
    const { openAlertsDialogModal, handleCloseAlertsDialogModal, onDeleteButtonAlertsDialogModal, product } = props;

    return (
        <div>
            <Dialog
                open={openAlertsDialogModal}
                onClose={handleCloseAlertsDialogModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {'You gonna to delete the following item. are you sure?'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {product &&
                            `${product.categorie} / ${product.subCategorie} / ${product.subSubCategorie} >> ${product.title}`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" autoFocus onClick={handleCloseAlertsDialogModal} color="primary">
                        Cencel
                    </Button>

                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={onDeleteButtonAlertsDialogModal}
                        startIcon={<DeleteIcon />}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
