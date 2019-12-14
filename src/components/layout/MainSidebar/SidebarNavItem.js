import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouteNavLink } from 'react-router-dom';
import { NavItem, NavLink } from 'shards-react';
import './MainSidebar.css';
class SidebarNavItem extends React.Component {
    state = {
        modal: false,
    };

    renderNavLink = item => {
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

    toggle = () => this.setState({ modal: !this.state.modal });
    renderNavModelButton = item => {
        const { modal } = this.state;

        return (
            <div className="nav-link" onClick={this.toggle}>
                {this.props.renderModal(modal, this.toggle)}
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

    renderNavItems = item => {
        if (!item.button && !item.model) {
            return this.renderNavLink(item);
        } else {
            return this.renderNavModelButton(item);
        }
    };

    render() {
        const { item } = this.props;
        return <NavItem>{this.renderNavItems(item)}</NavItem>;
    }
}

SidebarNavItem.propTypes = {
    /**
     * The item object.
     */
    item: PropTypes.object,
};

export default SidebarNavItem;
