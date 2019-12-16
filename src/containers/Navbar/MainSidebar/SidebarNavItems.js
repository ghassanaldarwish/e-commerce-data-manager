import React from 'react';
import { Nav } from 'shards-react';
import SidebarNavItem from './SidebarNavItem';
import DialogModal from '../../../components/DialogModal/DialogModal';
import Input from '../../../components/InputField/InputField';
import MainSidebarServices from './MainSidebar.services';
import { formConfig } from '../navbarPrototypes';
import CreateNewCategoryModal from '../../../templates/createNewCategoryModal/createNewCategoryModal';
import CollapseModal from '../../../components/CollapseModal/CollapseModal';

const SidebarNavItems = () => {
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
                <CollapseModal navItems={navItems} />

                {/* {navItems.map((item, idx) => (
                    <SidebarNavItem renderModal={renderModal} key={idx} item={item} />
                ))} */}
            </Nav>
        </div>
    );
};

export default SidebarNavItems;
