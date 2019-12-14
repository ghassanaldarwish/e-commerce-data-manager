import React from 'react';
import { Nav } from 'shards-react';

import SidebarNavItem from './SidebarNavItem';
import { Store } from '../../flux';
import NewCategoryModal from '../../components/NewCategorn/NewCategorn';
import Input from '../../components/InputField/InputField';
import MainSidebarServices from './MainSidebar.services';

const formConfig = [
    {
        forOrigin: 'NewCategoryModal',
        title: 'Nested',
        name: 'nested',

        value: true,
        type: 'checkbox',

        error: null,
        inputElement: 'checkbox',
    },
    {
        forOrigin: 'NewCategoryModal',
        title: 'Title',
        name: 'title',
        required: true,
        value: '',
        type: 'text',
        feedback: '*Categore title is required!',
        error: null,
        inputElement: 'input',
    },
    {
        forOrigin: 'NewCategoryModal',
        title: 'Value',
        name: 'value',
        required: true,
        value: '',
        type: 'text',
        feedback: '*Categore value is required!',
        error: null,
        inputElement: 'input',
    },
    {
        forOrigin: 'NewCategoryModal',
        title: 'Image',
        name: 'image',

        value: '',
        required: true,
        type: 'text',
        feedback: '*Categore image is required!',
        error: null,
        inputElement: 'input',
    },
    {
        forOrigin: 'NewCategoryModal',
        title: 'Icon',
        name: 'htmlBefore',
        value: '',
        required: true,
        type: 'text',
        feedback: '*Categore icon is required!',
        error: null,
        inputElement: 'input',
    },
];

const SidebarNavItems = () => {
    const { values, create, onChangeField, onSubmitNewCategory, onChangeCheckbox } = MainSidebarServices();
    const { navItems } = values;

    const renderModal = (modal, toggle, title) => {
        return (
            <NewCategoryModal title={title} onSubmitNewCategory={onSubmitNewCategory} modal={modal} toggle={toggle}>
                {formConfig.map(
                    (config, index) =>
                        Input && (
                            <Input
                                onChangeCheckbox={onChangeCheckbox}
                                onChangeField={onChangeField}
                                key={index}
                                {...config}
                            />
                        ),
                )}
            </NewCategoryModal>
        );
    };

    console.log(values);

    return (
        <div className="nav-wrapper">
            <Nav className="nav--no-borders flex-column">
                {navItems.map((item, idx) => (
                    <SidebarNavItem renderModal={renderModal} key={idx} item={item} />
                ))}
            </Nav>
        </div>
    );
};

export default SidebarNavItems;
