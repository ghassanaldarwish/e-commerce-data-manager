import React, { useState } from 'react';
import { NavLink as RouteNavLink } from 'react-router-dom';
import { NavItem, NavLink } from 'shards-react';
import './MainSidebar.css';
import CollapseModal from '../../../components/CollapseModal/CollapseModal';

import { Type } from '../Navbar.enum';
const SidebarNavItem = ({ item, renderModal }) => {
    const [modal, setModal] = useState(false);

    const renderNavLink = item => {
        return (
            <NavLink tag={RouteNavLink} to={item.to}>
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
        console.log('item==>', item);
        return (
            <div className="nav-link" onClick={toggle}>
                {renderModal(modal, toggle, item.title)}
                {item.htmlBefore && (
                    <div
                        className="d-inline-block item-icon-wrapper"
                        dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
                    />
                )}

                {item.title && <span>{item.title}</span>}
                <CollapseModal />
            </div>
        );
    };

    const renderNavCollapseModalButton = item => {
        console.log('item==>', item);
        return (
            <div className="nav-link" onClick={toggle}>
                {CollapseModal(modal, toggle, item.title)}
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
        switch (item.type) {
            case Type.Modal:
                return renderNavModelButton(item);
            default:
                return renderNavLink(item);
        }
    };

    return <NavItem>{renderNavItems(item)}</NavItem>;
};

export default SidebarNavItem;
