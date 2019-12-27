import React, { useState } from 'react';
import FullScreenModalComponent from '../../../components/FullScreenModal/FullScreenModal.component';
import formConfig from './formConfig';
import InputField from '../../../components/InputField/InputField';
import axios from 'axios';
const AddProductForm = ({ handleClose, open }) => {
    const [configs, setConfigs] = useState(formConfig);
    const [errors, setErrors] = useState();

    const quillTextEditorData = data => {
        setConfigs({ ...configs, productReview: { ...configs.productReview, value: data.ops } });
        localStorage.setItem('productReview', JSON.stringify(data.ops));
    };
    const inputChangedHandler = (event, fieldKey) => {
        setConfigs({ ...configs, [fieldKey]: { ...configs[fieldKey], value: event.target.value } });
        localStorage.setItem([fieldKey], JSON.stringify(event.target.value));
    };
    const onSubmitProductHandler = async e => {
        e.preventDefault();

        const prodectData = {
            title: configs.title.value,
            subTitle: configs.subTitle.value,
            brand: configs.brand.value,
            price: configs.price.value,
            image: configs.image.value,
            link: configs.link.value,
            productSource: 'test',
            categorie: 'test',
            subCategorie: 'test',
            subSubCategorie: 'test',
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
            const product = await axios.post('/api/v1/products/', prodectData);
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
    const renderErrorMessage = () => {
        return (
            <div id="test">
                <div>
                    Submit data Fail:
                    {errors.errors.statusText}
                    Status code
                    {errors.errors.statusCode}
                </div>
                <div>
                    {' '}
                    Error creator: {errors.errors.createdBy}
                    ,Time stamp =>
                    {errors.errors.timestamp}, Path =>
                    {errors.errors.path}.{' '}
                </div>
            </div>
        );
    };
    return (
        <FullScreenModalComponent handleClose={handleClose} open={open}>
            {!!errors && renderErrorMessage()}
            <form onSubmit={onSubmitProductHandler}>
                {Object.keys(configs).map((config, index) => {
                    let error;

                    if (!!errors && !!errors.errors && !!errors.errors.validationException) {
                        const validationException = errors.errors.validationException;
                        console.log('ERRORS===>', validationException[config]);
                        if (!!validationException[config]) {
                            error = validationException[config];
                        }
                    }
                    return (
                        <InputField
                            errors={error}
                            key={index}
                            {...configs[config]}
                            fieldKey={config}
                            quillTextEditorData={quillTextEditorData}
                            inputChangedHandler={inputChangedHandler}
                        />
                    );
                })}
            </form>
        </FullScreenModalComponent>
    );
};

export default AddProductForm;
