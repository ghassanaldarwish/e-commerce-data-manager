import React from 'react';
import { Nav } from 'shards-react';
import SidebarNavItem from './SidebarNavItem';
import NewCategoryModal from '../../../components/NewCategorn/NewCategorn';
import Input from '../../../components/InputField/InputField';
import MainSidebarServices from './MainSidebar.services';
import { formConfig } from '../navbarPrototypes';

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
