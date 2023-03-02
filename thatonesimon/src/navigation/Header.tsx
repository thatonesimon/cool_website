import React from 'react';
import { Link } from "react-router-dom";
import fire_header from '../assets/images/fire_header_wide.jpg'

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

export default class Header extends React.Component {

    getNavButtons(navItems: NavItem[]) {
        const navButtons: React.ReactElement[] = [];

        navItems.forEach(navItem => {
            navButtons.push(<Link className='header-nav-button' to={navItem.path}>{navItem.label}</Link>)
        });

        return navButtons;
    }

    render() {
        return (
            <div className='header'>
                <img src={fire_header} alt='Header' className='header-image'/>
                <nav className='header-links'>
                    {this.getNavButtons(navItems)}
                </nav>
            </div>
        )
    }
}
