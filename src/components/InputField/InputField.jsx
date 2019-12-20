import React from 'react';
import './InputField.css';
import { TextField, Button } from '@material-ui/core';
import QuillTextEditor from './QuillTextEditor';
const InputField = props => {
    const {
        elementType,
        elementConfig,
        value,
        validation,
        valid,
        touched,
        quillTextEditorData,
        inputChangedHandler,
        fieldKey,
        errors,
    } = props;

    let element = null;

    switch (elementType) {
        case 'quill':
            element = (
                <div>
                    <label> {elementConfig.label}</label>
                    <QuillTextEditor quillData={value} quillTextEditorData={quillTextEditorData} />
                </div>
            );
            break;
        case 'button':
            element = (
                <Button type={elementConfig.type} variant="contained" color="primary">
                    {elementConfig.label}
                </Button>
            );
            break;
        case 'input':
            element = (
                <TextField
                    error={!!errors}
                    label={elementConfig.label}
                    type={elementConfig.type}
                    required={validation.required}
                    variant="outlined"
                    helperText={
                        !!errors && (
                            <div>
                                <div>
                                    Could you check=> {elementConfig.label}: {errors.header}
                                </div>
                                <ul>{!!errors.list && errors.list.map((item, i) => <li key={i}>{item}</li>)}</ul>
                            </div>
                        )
                    }
                    onChange={e => inputChangedHandler(e, fieldKey)}
                    value={value}
                />
            );

            break;

        default:
            element = <div>Element Type: {elementType} NOT FOUND</div>;
            break;
    }

    return element;
};

export default InputField;
