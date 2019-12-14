import React, { Component } from 'react';
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from 'reactstrap';

import { Form } from 'reactstrap';

import './NewCategorn.css';
export class NewCategoryModal extends Component {
    render() {
        const { modal, toggle, title } = this.props;
        return (
            <Modal isOpen={modal} toggle={toggle} className="NewCategoryModal">
                <ModalHeader toggle={toggle}>Create {title}</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.props.onSubmitNewCategory}>
                        {this.props.children}
                        <Button color="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    {' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default NewCategoryModal;
