import React from 'react';
import FullScreenModalComponent from '../../../components/FullScreenModal/FullScreenModal.component';
import InputField from '../../../components/InputField/InputField';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import './EditProductForm.css';
const EditProductForm = ({
    handleClose,
    open,
    configs,
    errors,
    quillTextEditorData,
    inputChangedHandler,
    onSubmitProductHandler,
    slugifyUrlPath,
}) => {
    const renderErrorMessage = () => {
        return (
            <div id="test" className="RenderErrorMessage">
                <div>
                    Submit data Fail =>
                    {errors.errors.statusText}
                    <br />
                    Status code =>
                    {errors.errors.statusCode}
                    <br />
                    ErrorMessage => {errors.errors.errorMessage}
                </div>
                <div>
                    {' '}
                    Error creator >> {errors.errors.createdBy}
                    <br />
                    Time stamp =>
                    {errors.errors.timestamp}
                    <br />
                    Path =>
                    {errors.errors.path}.{' '}
                </div>
            </div>
        );
    };
    return (
        <FullScreenModalComponent handleClose={handleClose} open={open}>
            {!!errors && renderErrorMessage()}
            <Breadcrumbs items={slugifyUrlPath} />
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

export default EditProductForm;
