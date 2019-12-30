import { useState, useEffect } from 'react';
import { addProductForm, prodectDataProvider } from './Products.configs';
import Axios from 'axios';
export enum Actions {
    Edit = 'edit',
}
const ProductServices = () => {
    const [configs, setConfigs] = useState(addProductForm as any);
    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState();
    const [action, setAction] = useState();
    const [product, setProduct] = useState();
    const [errors, setErrors] = useState();
    const [openAlertsDialogModal, setOpenAlertsDialogModal] = useState(false);
    const setProductLocally = (id: string) => {
        setProduct(products.find((product: any) => product._id === id));
    };
    const handleClickOpenAlertsDialogModal = (id: string) => {
        setProductLocally(id);
        setOpenAlertsDialogModal(true);
    };

    const handleCloseAlertsDialogModal = () => {
        setOpenAlertsDialogModal(false);
    };
    const onDeleteButtonAlertsDialogModal = () => {
        handleCloseAlertsDialogModal();
        deleteProductById(product._id);
        console.log('onDeleteButtonAlertsDialogModal');
    };
    const errorsHandler = (error: any) => {
        if (error.response) {
            setErrors({
                errors: { ...error.response.data, statusText: error.response.statusText },
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });

            console.log({ ...error.response });
        }
    };

    const handleClickOpen = (action: string, id: string) => {
        setAction(action);
        console.log('clicked');
        if (action === 'edit') {
            setProductLocally(id);
            if (!!product) {
                console.log('product==>', product);
                const copyConfigs = { ...configs };

                Object.keys(product).map((prod: any) => {
                    copyConfigs[prod].value = product[prod];
                });
                console.log('  copyConfigs[prod].value = product[prod]==>', copyConfigs);
                //  setConfigs(copyConfigs)
            }
            return setOpen(true);
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const findProductById = async (id: string) => {
        console.log('findProductById ==>', id);
        try {
            const productData = await Axios(`/api/v1/products/${id}`);
            console.log('product ==>', productData);
            setProduct(productData.data);
        } catch (ex) {
            errorsHandler(ex);
        }
    };

    const deleteProductById = async (id: string) => {
        console.log('deleteProductById');
        try {
            const productData = await Axios.delete(`/api/v1/products/${id}`);
            const newProducts = products.filter((product: any) => product._id !== id);
            setProducts(newProducts);
            console.log('product ==>', productData);
        } catch (ex) {
            errorsHandler(ex);
        }
    };

    const getProductId = (id: string, action?: string) => {
        switch (action) {
            case 'delete':
                return handleClickOpenAlertsDialogModal(id);
            // case 'edit':
            //     return findProductById(id)
            case 'edit':
                return handleClickOpen(action, id);
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
        } catch (ex) {
            errorsHandler(ex);
        }
    };
    const onSubmitProductCreatedHandler = async (e: any) => {
        e.preventDefault();
        const ct = slugifyUrlPath(false);
        const prodectData = prodectDataProvider(configs, ct);

        console.log('product ==>', prodectData);
        try {
            const product = await Axios.post('/api/v1/products/', prodectData);
            handleClose();
            const newProducts = products.map((i: any) => i).push(product);
            setProducts(newProducts);
            console.log('product ==>', products);
        } catch (ex) {
            errorsHandler(ex);
        }
    };

    const onSubmitProductEditHandler = async (e: any) => {
        e.preventDefault();

        try {
            console.log('product ==>', products);
        } catch (ex) {
            errorsHandler(ex);
        }
    };

    useEffect(() => {
        findProducts();
    }, []);

    const getProductsShort = () =>
        (products &&
            products.map((product: any) => ({
                creator: product.creatorId,
                name: product.title,
                _id: product._id,
                source: product.productSource,
                date: product.date,
            }))) ||
        [];

    return {
        action,
        product,
        onDeleteButtonAlertsDialogModal,
        openAlertsDialogModal,
        handleClickOpenAlertsDialogModal,
        handleCloseAlertsDialogModal,
        open,
        handleClickOpen,
        handleClose,
        getProductsShort,
        onSubmitProductEditHandler,
        configs,
        errors,
        quillTextEditorData,
        inputChangedHandler,
        onSubmitProductCreatedHandler,
        slugifyUrlPath,
        getProductId,
    };
};

export default ProductServices;
