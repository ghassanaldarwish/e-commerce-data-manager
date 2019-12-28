import { useState, useEffect } from 'react';
import { addProductForm, prodectDataProvider } from './Products.configs';
import Axios from 'axios';

const ProductServices = () => {
    const [configs, setConfigs] = useState(addProductForm as any);
    const [products, setProducts] = useState();
    const [errors, setErrors] = useState();

    const getProductId = (id: string, action?: string) => {
        switch (action) {
            case 'delete':
                return console.log('getProductId => ', action, id);
            case 'edit':
                return console.log('getProductId => ', action, id);
            default:
                return console.log('getProductId => ', action, id);
        }
    };
    const slugifyUrlPath = (isRemoveUnderscore: boolean) => {
        const { pathname } = window.location;
        const pathSlug = isRemoveUnderscore ? pathname.replace(/_/g, ' ') : pathname;
        const pathSplit = pathSlug.split('/').filter(i => !!i);
        return pathSplit;
    };

    const quillTextEditorData = (data: any) => {
        setConfigs({ ...configs, productReview: { ...configs.productReview, value: data.ops } });
        localStorage.setItem('productReview', JSON.stringify(data.ops));
    };
    const inputChangedHandler = (event: any, fieldKey: any) => {
        setConfigs({ ...configs, [fieldKey]: { ...configs[fieldKey], value: event.target.value } });
        localStorage.setItem([fieldKey] as any, JSON.stringify(event.target.value));
    };

    const findProducts = async () => {
        const ct = slugifyUrlPath(false);
        try {
            const productsData = await Axios(
                `/api/v1/products?categorie=${ct[0]}&subCategorie=${ct[1]}&subSubCategorie=${ct[2]}`,
            );
            console.log('products ==>', productsData);
            setProducts(productsData.data);
        } catch (error) {
            if (error.response) {
                setErrors({
                    ...errors,
                    errors: { ...error.response.data, statusText: error.response.statusText },
                });
                window.scrollTo({ top: 0, behavior: 'smooth' });

                console.log({ ...error.response });
            }
        }
    };
    const onSubmitProductHandler = async (e: any) => {
        e.preventDefault();
        const ct = slugifyUrlPath(false);
        const prodectData = prodectDataProvider(configs, ct);

        console.log('product ==>', prodectData);
        try {
            const product = await Axios.post('/api/v1/products/', prodectData);
            console.log('product ==>', product);
        } catch (error) {
            if (error.response) {
                setErrors({
                    ...errors,
                    errors: { ...error.response.data, statusText: error.response.statusText },
                });
                window.scrollTo({ top: 0, behavior: 'smooth' });

                console.log({ ...error.response });
            }
        }
    };

    useEffect(() => {
        findProducts();
    }, []);

    const getProductsShort: any = !!products
        ? products.map((product: any) => ({
              creator: product.creatorId,
              name: product.title,
              _id: product._id,
              source: product.productSource,
              date: product.date,
          }))
        : [];

    return {
        getProductsShort,
        configs,
        errors,
        quillTextEditorData,
        inputChangedHandler,
        onSubmitProductHandler,
        slugifyUrlPath,
        getProductId,
    };
};

export default ProductServices;
