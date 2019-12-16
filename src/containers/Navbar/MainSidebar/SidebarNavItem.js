import React from 'react';
import { Nav } from 'shards-react';
import MainSidebarServices from './MainSidebar.services';
import { formConfig } from '../navbarPrototypes';
import CreateNewCategoryModal from '../../../templates/createNewCategoryModal/createNewCategoryModal';
import SidebarNavCollapse from './SidebarNavCollapse';

const SidebarNavItem = () => {
    const { values, create, onChangeField, onSubmitNewCategory, onChangeCheckbox } = MainSidebarServices();
    const { navItems } = values;

    const renderModal = (modal, toggle, title) => {
        const data = { modal, toggle, title, onSubmitNewCategory, formConfig, onChangeCheckbox, onChangeField };
        return <CreateNewCategoryModal {...data} />;
    };

    console.log(values);

    return (
        <div className="nav-wrapper">
            <Nav className="nav--no-borders flex-column">
                <SidebarNavCollapse navItems={navItems} />
            </Nav>
        </div>
    );
};

export default SidebarNavItem;
