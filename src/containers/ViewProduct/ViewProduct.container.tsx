import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import ProductServices, { Actions } from '../Products/Products.services';

const ViewProductContainer = (props: any) => {
    const { productView, findProductViewById } = ProductServices();
    useEffect(() => {
        findProductViewById(props.match.params.id);
    }, []);
    if (!!productView) {
        console.log('ViewProductContainer', productView);
    }

    return <div>ViewProductContainer: {props.match.params.id}</div>;
};

export default withRouter(ViewProductContainer);
