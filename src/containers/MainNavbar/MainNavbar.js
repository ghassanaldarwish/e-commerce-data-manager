import React from 'react';
import classNames from 'classnames';
import { Container, Navbar } from 'shards-react';

import NavbarSearch from './NavbarSearch';
import NavbarNav from '../NavbarNav/NavbarNav';
import NavbarToggle from './NavbarToggle';

const MainNavbar = ({ layout, stickyTop }) => {
    const classes = classNames('main-navbar', 'bg-white', stickyTop && 'sticky-top');

    return (
        <div className={classes}>
            <Container className="p-0">
                <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0">
                    <NavbarSearch />
                    <NavbarNav />
                    <NavbarToggle />
                </Navbar>
            </Container>
        </div>
    );
};

export default MainNavbar;
