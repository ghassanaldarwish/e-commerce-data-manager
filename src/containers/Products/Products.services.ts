import { useState, useEffect } from 'react';
import { addProductForm, EditProductForm, prodectDataProvider } from './Products.configs';
import Axios from 'axios';
export enum Actions {
    Edit = 'edit',
}
const ProductServices = () => {
    const [configs, setConfigs] = useState(addProductForm as any);
    const [configsEdit, setConfigsEdit] = useState(EditProductForm as any);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [products, setProducts] = useState();
    const [product, setProduct] = useState();

    const [errors, setErrors] = useState();
    const [openAlertsDialogModal, setOpenAlertsDialogModal] = useState(false);
    const setProductLocally = (id: string) => {
        const setProd = products.find((product: any) => product._id === id);
        setProduct(setProd);
        return setProd;
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
            setLoading(false);
            setErrors({
                errors: { ...error.response.data, statusText: error.response.statusText },
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });

            console.log({ ...error.response });
        }
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpenEdit = async (id: string) => {
        const currentProduct: any = await findProductById(id);
        console.log('handleClickOpenEdit', currentProduct);
        if (!!currentProduct) {
            setProduct(currentProduct);
            const copyConfigsEdit = { ...configsEdit };

            Object.keys(copyConfigsEdit).map((prod: any) => {
                if (prod === 'productReview') {
                    copyConfigsEdit[prod].value = currentProduct[prod].content;
                } else {
                    copyConfigsEdit[prod].value = currentProduct[prod];
                }
            });
            setConfigsEdit(copyConfigsEdit);

            setOpenEdit(true);
        }
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    const findProductById = async (id: string) => {
        console.log('findProductById ==>', id);
        setLoading(true);
        try {
            const productData = await Axios(`/api/v1/products/${id}`);
            console.log('findProductById ==>', productData.data);
            setProduct(productData.data);
            setLoading(false);
            return productData.data;
        } catch (ex) {
            errorsHandler(ex);
        }
    };

    const deleteProductById = async (id: string) => {
        console.log('deleteProductById');
        setLoading(true);
        try {
            const productData = await Axios.delete(`/api/v1/products/${id}`);
            const newProducts = products.filter((product: any) => product._id !== id);
            setProducts(newProducts);
            setLoading(false);
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
                return handleClickOpenEdit(id);
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
        console.log('quillTextEditorData ==>', data);
        setConfigs({ ...configs, productReview: { ...configs.productReview, value: data.ops } });
        localStorage.setItem('productReview', JSON.stringify(data.ops));
    };

    const quillTextEditorDataEdit = (data: any) => {
        setConfigsEdit({ ...configsEdit, productReview: { ...configsEdit.productReview, value: data.ops } });
        setProduct({ ...product, productReview: { ...product.productReview, content: data.ops } });
        console.log('quillTextEditorDataEdit=>configsEdit ==>', configsEdit);
    };
    const inputChangedHandler = (event: any, fieldKey: any) => {
        setConfigs({ ...configs, [fieldKey]: { ...configs[fieldKey], value: event.target.value } });
        localStorage.setItem([fieldKey] as any, JSON.stringify(event.target.value));
    };

    const inputChangedHandlerEdit = (event: any, fieldKey: any) => {
        setConfigsEdit({ ...configsEdit, [fieldKey]: { ...configsEdit[fieldKey], value: event.target.value } });
        setProduct({ ...product, [fieldKey]: event.target.value });

        console.log('inputChangedHandlerEdit', product);
    };

    const findProducts = async () => {
        const ct = slugifyUrlPath(false);
        setLoading(true);
        try {
            const productsData = await Axios(
                `/api/v1/products?categorie=${ct[0]}&subCategorie=${ct[1]}&subSubCategorie=${ct[2]}`,
            );
            console.log('products ==>', productsData);
            setProducts(productsData.data);
            setLoading(false);
        } catch (ex) {
            errorsHandler(ex);
        }
    };
    const onSubmitProductCreatedHandler = async (e: any) => {
        e.preventDefault();
        const ct = slugifyUrlPath(false);
        const prodectData = prodectDataProvider(configs, ct);
        setLoading(true);
        console.log('product ==>', prodectData);
        try {
            const product = await Axios.post('/api/v1/products/', prodectData);
            handleClose();
            setLoading(false);
            // const newProducts = products.map((i: any) => i).push(product);
            // setProducts(newProducts);
            console.log('product ==>', products);
        } catch (ex) {
            errorsHandler(ex);
        }
    };

    const onSubmitProductEditHandler = async (e: any, id: string) => {
        e.preventDefault();
        setLoading(true);
        try {
            const updateProduct: any = await Axios.put('/api/v1/products', product);
            console.log('onSubmitProductEditHandler ==>', updateProduct);
            setLoading(false);
            handleCloseEdit();
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
        loading,
        quillTextEditorDataEdit,
        inputChangedHandlerEdit,
        configsEdit,
        handleCloseEdit,
        openEdit,
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
