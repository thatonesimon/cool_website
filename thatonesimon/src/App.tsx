import React from 'react';
import './App.css';
import { Outlet, useLocation } from "react-router-dom";
import Header from "./navigation/Header";
import Footer from "./navigation/Footer";
import Home from "./routes/Home";

function App() {
    const {pathname} = useLocation();

    return (
        <div className="app">
            <Header/>
            {pathname === '/' && <Home/>}
            <div id="content" className="content">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
