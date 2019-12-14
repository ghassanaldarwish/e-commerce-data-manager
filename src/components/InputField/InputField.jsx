import React from 'react';
import {
    FormGroup,
    Label,
    Input,
    FormFeedback,
    FormText,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import './InputField.css';
const InputField = props => {
    const {
        forOrigin,
        title,
        error,
        feedback,
        required,
        type,
        name,
        inputElement,
        onChangeField,
        value,
        onChangeCheckbox,
        isDropdownOpen,
        dropdownToggle,
        options,
    } = props;

    let element = null;

    switch (inputElement) {
        case 'dropdown':
            element = (
                <Dropdown isOpen={true} toggle={() => true}>
                    <DropdownToggle caret>{title}</DropdownToggle>
                    <DropdownMenu>
                        {options.map((option, i) => (
                            <DropdownItem key={i}>{option.title}</DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
            );
            break;
        case 'input':
            element = (
                <FormGroup>
                    <Label for={forOrigin}>{title}</Label>
                    <Input onChange={onChangeField} name={name} required={required} type={type} />
                    {error && <FormFeedback>{error}</FormFeedback>}
                    <FormText>{feedback}</FormText>
                </FormGroup>
            );

            break;
        case 'checkbox':
            element = (
                <FormGroup check>
                    <div className="Checkbox">
                        <Label for={forOrigin}>{title}</Label>
                        <Input defaultChecked={value} onChange={onChangeCheckbox} name={name} type={type} />
                    </div>
                </FormGroup>
            );

            break;

        default:
            element = <div>Element Type: {inputElement} NOT FOUND</div>;
            break;
    }

    return element;
};

export default InputField;
