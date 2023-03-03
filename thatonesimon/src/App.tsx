import React from 'react';
import './App.css';
import { Outlet, useLocation } from "react-router-dom";
import Header from "./navigation/Header";
import Footer from "./navigation/Footer";
import Home from "./routes/Home";
import { Container, Nav, Navbar } from "react-bootstrap";
import { navItems } from "./navigation/navigation";

function App() {
    const {pathname} = useLocation();

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
                sticky="top"
                expand="sm"
            >

                <Container className="h-100">
                    <Navbar.Brand href="#">THATONESIMON</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end w-100">
                            {getNavBarLinks()}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }

    return (
        <div className="app">
            <Header/>
            {getNavBar()}
            {pathname === '/' && <Home/>}
            <div id="content" className="content">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
