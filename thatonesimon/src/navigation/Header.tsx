import React from 'react';
import { Link } from "react-router-dom";
import fire_header from '../assets/images/fire_header_wide.jpg'

export default class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <img src={fire_header} alt='Header' className='header-image'/>
                <nav>
                    <ul id="navigation" className='header-links'>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <hr />
            </div>
        )
    }
}
