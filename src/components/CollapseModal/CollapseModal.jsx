import React from 'react';
import './CollapseModal.css';
import { Collapse } from 'reactstrap';
const CollapseModal = props => {
    return <Collapse isOpen={true}>{props.children}</Collapse>;
};

export default CollapseModal;
