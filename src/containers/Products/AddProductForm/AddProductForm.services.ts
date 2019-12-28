import { useState } from 'react';
import formConfig from './formConfig';
import Axios from 'axios';

const AddProductFormServices = () => {
    const [configs, setConfigs] = useState(formConfig as any);
    const [errors, setErrors] = useState();

    const slugifyUrlPath = () => {
        const { pathname } = window.location;
        const pathSlug = pathname.replace(/_/g, ' ');
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
    const onSubmitProductHandler = async (e: any) => {
        e.preventDefault();
        const ct = slugifyUrlPath();
        const prodectData = {
            title: configs.title.value,
            subTitle: configs.subTitle.value,
            brand: configs.brand.value,
            price: configs.price.value,
            image: configs.image.value,
            link: configs.link.value,
            productSource: 'amazon',
            categorie: ct[0],
            subCategorie: ct[1],
            subSubCategorie: ct[2],
            description: configs.description.value,
            productReview: configs.productReview.value,
            productMedia: {
                productImage: [
                    {
                        url: configs.productImage1.value,
                    },
                    {
                        url: configs.productImage2.value,
                    },
                    {
                        url: configs.productImage3.value,
                    },
                ],
                peopleImage: [
                    {
                        url: configs.peopleImage1.value,
                    },
                    {
                        url: configs.peopleImage2.value,
                    },
                    {
                        url: configs.peopleImage3.value,
                    },
                ],
            },
        };
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
    return {
        configs,
        errors,
        quillTextEditorData,
        inputChangedHandler,
        onSubmitProductHandler,
        slugifyUrlPath,
    };
};

export default AddProductFormServices;
