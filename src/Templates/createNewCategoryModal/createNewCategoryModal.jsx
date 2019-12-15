import React from 'react';
import DialogModal from '../../components/DialogModal/DialogModal';
import InputField from '../../components/InputField/InputField';

const CreateNewCategoryModal = ({
    modal,
    toggle,
    title,
    onSubmitNewCategory,
    formConfig,
    onChangeCheckbox,
    onChangeField,
}) => {
    return (
        <DialogModal title={title} onSubmitNewCategory={onSubmitNewCategory} modal={modal} toggle={toggle}>
            {formConfig.map(
                (config, index) =>
                    InputField && (
                        <InputField
                            onChangeCheckbox={onChangeCheckbox}
                            onChangeField={onChangeField}
                            key={index}
                            {...config}
                        />
                    ),
            )}
        </DialogModal>
    );
};

export default CreateNewCategoryModal;
