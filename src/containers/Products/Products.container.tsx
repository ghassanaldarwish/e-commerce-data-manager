import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import StickyHeadTable from '../../components/StickyHeadTable/StickyHeadTable';
import FabButtonAddIcon from '../../components/FabButtonAddIcon/FabButtonAddIcon';

import AddProductForm from './AddProductForm/AddProductForm';
import ProductServices, { Actions } from './Products.services';
import EditProductForm from './EditProductForm/EditProductForm';
import AlertsDialogModal from '../../components/AlertsDialogModal/AlertsDialogModal';

interface Data {
    _id: string;
    name: string;
    creator: string;
    date: string;
    source: string;
}

const ProductsContainer = () => {
    const {
        getProductId,
        getProductsShort,
        open,
        handleClickOpen,
        handleClose,
        openAlertsDialogModal,
        product,
        handleCloseAlertsDialogModal,
        onDeleteButtonAlertsDialogModal,
        action,
    } = ProductServices();
    const renderFormModal = () => {
        return action === Actions.Edit ? (
            <EditProductForm handleClose={handleClose} open={open} />
        ) : (
            <AddProductForm handleClose={handleClose} open={open} />
        );
    };
    return (
        <React.Fragment>
            <CssBaseline />

            <Container maxWidth="sm" component="main">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Pricing
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p">
                    Quickly build an effective pricing table for
                </Typography>
                <FabButtonAddIcon clickedHandler={handleClickOpen} />
            </Container>

            <StickyHeadTable getProductId={getProductId} rowsData={getProductsShort} />
            {renderFormModal()}
            <AlertsDialogModal
                openAlertsDialogModal={openAlertsDialogModal}
                handleCloseAlertsDialogModal={handleCloseAlertsDialogModal}
                onDeleteButtonAlertsDialogModal={onDeleteButtonAlertsDialogModal}
                product={product}
            />
        </React.Fragment>
    );
};

export default ProductsContainer;
