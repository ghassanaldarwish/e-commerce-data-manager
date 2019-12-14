import React, { useState } from 'react';
import { NavLink as RouteNavLink } from 'react-router-dom';
import { NavItem, NavLink } from 'shards-react';
import './MainSidebar.css';
import MainSidebarServices from './MainSidebar.services';
const SidebarNavItem = ({ item, renderModal }) => {
    const { getNavItems } = MainSidebarServices();
    const [modal, setModal] = useState(false);

    const renderNavLink = item => {
        return (
            <NavLink tag={RouteNavLink} to={item.to ? item.to : null}>
                {item.htmlBefore && (
                    <div
                        className="d-inline-block item-icon-wrapper IconWraper"
                        dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
                    />
                )}
                {item.title && <span>{item.title}</span>}
                {item.htmlAfter && (
                    <div
                        className="d-inline-block item-icon-wrapper"
                        dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
                    />
                )}
            </NavLink>
        );
    };

    const toggle = () => setModal(!modal);
    const renderNavModelButton = item => {
        const navItems = getNavItems();
        console.log(navItems);
        return (
            <div className="nav-link" onClick={toggle}>
                {navItems && navItems.map((navItem, i) => navItem.model && renderModal(modal, toggle, navItem.title))}
                {item.htmlBefore && (
                    <div
                        className="d-inline-block item-icon-wrapper"
                        dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
                    />
                )}

                {item.title && <span>{item.title}</span>}
                {item.htmlAfter && (
                    <div
                        className="d-inline-block item-icon-wrapper"
                        dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
                    />
                )}
            </div>
        );
    };

    const renderNavItems = item => {
        if (!item.button && !item.model) {
            return renderNavLink(item);
        } else {
            return renderNavModelButton(item);
        }
    };

    return <NavItem>{renderNavItems(item)}</NavItem>;
};

export default SidebarNavItem;
