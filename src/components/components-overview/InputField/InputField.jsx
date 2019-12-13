import React, { Component } from 'react';
import { FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
export class InputField extends Component {
    render() {
        const { forOrigin, title, error, feedback, required, type, name } = this.props;
        return (
            <FormGroup>
                <Label for={forOrigin}>{title}</Label>
                <Input onChange={this.props.onChangeField} name={name} required={required} type={type} />
                {error && <FormFeedback>{error}</FormFeedback>}
                <FormText>{feedback}</FormText>
            </FormGroup>
        );
    }
}

export default InputField;
