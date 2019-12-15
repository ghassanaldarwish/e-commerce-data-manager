import React, { useState, Fragment } from 'react';
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

    const toggleOpen = () => setModal(true);

    const toggleClose = () => {
        setModal(false);
        console.log('modat closed', modal);
    };
    const renderNavModelButton = item => {
        console.log('item==>', item);
        return (
            <Fragment>
                <div className="nav-link" onClick={toggleOpen}>
                    {item.htmlBefore && (
                        <div
                            className="d-inline-block item-icon-wrapper"
                            dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
                        />
                    )}

                    {item.title && <span>{item.title}</span>}
                </div>
                {renderModal(modal, toggleClose, item.title)}
            </Fragment>
        );
    };

    const renderNavCollapseModelButton = item => {
        console.log('item==>', item);
        return (
            <Fragment>
                <div className="nav-link" onClick={toggleOpen}>
                    {item.htmlBefore && (
                        <div
                            className="d-inline-block item-icon-wrapper"
                            dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
                        />
                    )}
                    {item.title && <span>{item.title}</span>}
                    /> )}
                </div>
                {CollapseModal(modal, toggleClose, item.title)}
            </Fragment>
        );
    };

    const renderNavItems = item => {
        switch (item.type) {
            case Type.Modal:
                return renderNavModelButton(item);
            case Type.Collapse:
                return renderNavCollapseModelButton(item);
            default:
                return renderNavLink(item);
        }
    };

    return <NavItem>{renderNavItems(item)}</NavItem>;
};

export default SidebarNavItem;
