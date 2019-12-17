import React from 'react';
import { Nav } from 'shards-react';
import MainSidebarServices from './MainSidebar.services';
import SidebarNavCollapse from './SidebarNavCollapse';

const SidebarNavItem = () => {
    const { values } = MainSidebarServices();
    const { navItems } = values;

    return (
        <div className="nav-wrapper">
            <Nav className="nav--no-borders flex-column">
                <SidebarNavCollapse navItems={navItems} />
            </Nav>
        </div>
    );
};

export default SidebarNavItem;
