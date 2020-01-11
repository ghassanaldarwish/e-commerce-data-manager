import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';

const ViewProductContainer = (props: any) => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState();

    const [productView, setProductView] = useState();
    const errorsHandler = (error: any) => {
        if (error.response) {
            setLoading(false);
            setErrors({
                errors: { ...error.response.data, statusText: error.response.statusText },
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });

            console.log({ ...error.response });
        }
    };
    const findProductViewById = async (id: string) => {
        console.log('findProductById ==>', id);
        setLoading(true);
        try {
            const productViewData = await Axios(`/api/v1/products/view/${id}`);
            console.log('findProductById ==>', productViewData.data);
            setProductView(productViewData.data);
            setLoading(false);
            return productViewData.data;
        } catch (ex) {
            errorsHandler(ex);
        }
    };
    useEffect(() => {
        findProductViewById(props.match.params.id);
    }, []);
    if (!!productView) {
        console.log('ViewProductContainer', productView);
    }

    return (
        <div
            className="content"
            dangerouslySetInnerHTML={{ __html: productView && productView.productReview.content }}
        ></div>
    );
};

export default withRouter(ViewProductContainer);
