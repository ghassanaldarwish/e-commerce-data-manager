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
import Spinner from '../../components/Spinner/Spinner';

interface Data {
    _id: string;
    name: string;
    creator: string;
    date: string;
    source: string;
}

const ProductsContainer = () => {
    const {
        loading,
        quillTextEditorDataEdit,
        inputChangedHandlerEdit,
        configsEdit,
        onSubmitProductEditHandler,
        configs,
        errors,
        quillTextEditorData,
        inputChangedHandler,
        onSubmitProductCreatedHandler,
        slugifyUrlPath,
        handleCloseEdit,
        openEdit,
        getProductId,
        getProductsShort,
        open,
        handleClickOpen,
        handleClose,
        openAlertsDialogModal,
        product,
        handleCloseAlertsDialogModal,
        onDeleteButtonAlertsDialogModal,
    } = ProductServices();

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
            {loading ? <Spinner /> : <StickyHeadTable getProductId={getProductId} rowsData={getProductsShort} />}

            <EditProductForm
                configs={configsEdit}
                errors={errors}
                quillTextEditorData={quillTextEditorDataEdit}
                inputChangedHandler={inputChangedHandlerEdit}
                onSubmitProductHandler={onSubmitProductEditHandler}
                slugifyUrlPath={slugifyUrlPath}
                handleClose={handleCloseEdit}
                open={openEdit}
            />

            <AddProductForm
                configs={configs}
                errors={errors}
                quillTextEditorData={quillTextEditorData}
                inputChangedHandler={inputChangedHandler}
                onSubmitProductHandler={onSubmitProductCreatedHandler}
                slugifyUrlPath={slugifyUrlPath}
                handleClose={handleClose}
                open={open}
            />
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
