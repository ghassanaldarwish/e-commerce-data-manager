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
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
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
        variant,
        color,
    } = props;

    let element = null;

    switch (inputElement) {
        case 'button':
            element = (
                <Button variant={variant} color={color}>
                    {title}
                </Button>
            );
        case 'dropdown':
            element = (
                <FormControl variant="outlined">
                    <InputLabel id="demo-simple-select-outlined-label">{title}</InputLabel>
                    <Select
                        label={title}
                        variant="outlined"
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        //  value={age}
                        name={name}
                        onChange={onChangeField}
                        //  labelWidth={labelWidth}
                    >
                        {options.map((option, i) => (
                            <MenuItem value={option.value} key={i}>
                                {option.title}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            );
            break;
        case 'input':
            element = (
                <TextField
                    id={forOrigin}
                    label={title}
                    type={type}
                    name={name}
                    required={required}
                    variant="outlined"
                    helperText={feedback}
                    onChange={onChangeField}
                />
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
