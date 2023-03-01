import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Outlet, Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Header from "./navigation/Header";
import Footer from "./navigation/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <div id="content" className="content">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default App;
