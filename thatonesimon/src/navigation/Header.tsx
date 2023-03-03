import React from 'react';
import { Link, useLocation } from "react-router-dom";
import fire_header from '../assets/images/fire_header_wide.jpg'
import { Container, Nav, Navbar } from "react-bootstrap";

interface NavItem {
    path: string;
    label: string;
}

const navItems: NavItem[] = [
    {
        path: '/',
        label: "Home",
    },
    {
        path: '/experience',
        label: "Experience",
    },
    {
        path: '/about',
        label: 'About',
    },
    {
        path: '/contact',
        label: 'Contact',
    }
];

export default function Header() {

    const pathname = useLocation();

    const getNavButtons = (navItems: NavItem[]) => {
        return navItems.map(navItem => {
            return (
                <Link
                    className={pathname.pathname === navItem.path ? 'header-nav-button-selected' : 'header-nav-button'}
                    to={navItem.path}
                >
                    {navItem.label}
                </Link>
            )
        })
    }

    const getNavBarLinks = () => {
        return navItems.map(navItem => {
            return (
                <Nav.Link href={`#${navItem.path}`}>{navItem.label}</Nav.Link>
            )
        })
    }

    const getNavBar = () => {
        return (
            <Navbar
                bg="dark"
                variant="dark"
                // fixed="top"
                // sticky="top"
                expand="lg"
                // className="sticky-top"
            >

                <Container className="h-100">
                    <Navbar.Brand href="#">THATONESIMON</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {getNavBarLinks()}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }

    return (
        <div>
            <img src={fire_header} alt='Header' className='header-image'/>
            <nav className='header-links'>
                {/*{getNavBar()}*/}
            </nav>
        </div>
    )
}
