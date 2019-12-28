import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import StickyHeadTable from '../../components/StickyHeadTable/StickyHeadTable';
import FabButtonAddIcon from '../../components/FabButtonAddIcon/FabButtonAddIcon';

import AddProductForm from './AddProductForm/AddProductForm';
import ProductServices from './Products.services';
interface Data {
    _id: string;
    name: string;
    creator: string;
    date: string;
    source: string;
}
const products: Data[] = [
    {
        creator: 'Ghassan',
        name: 'hjnnöknöknkö',
        _id: '5e077159778ff1305448b38b',
        source: 'amazon',
        date: '2019-12-28T15:14:33.395Z',
    },
    {
        creator: 'Ghassan',
        name: 'hjnnöknöknkö',
        _id: 'test',
        source: 'amazon',
        date: '2019-12-28T15:14:33.395Z',
    },
];
const ProductsContainer = () => {
    const [open, setOpen] = React.useState(false);
    const { getProductId, getProductsShort } = ProductServices();
    const handleClickOpen = () => {
        console.log('clicked');
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
            <AddProductForm handleClose={handleClose} open={open} />
        </React.Fragment>
    );
};

export default ProductsContainer;
