import React from 'react';
import './Navbar.css'
import logo from '../../../images/logos/logo.png'
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <a class="navbar-brand" href="/">
                    <img className="logo" src={logo} alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " >
                    <ul class="navbar-nav ml-auto  ">
                        <li class="nav-item active p-3 ">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item p-3">
                            <a class="nav-link" href="/">Our Portfolio</a>
                        </li>
                        <li class="nav-item p-3">
                            <a class="nav-link" href="/">Our Team</a>
                        </li>
                        <li class="nav-item p-3">
                            <a class="nav-link" href="/">Contact Us</a>
                        </li>
                        <Link to="/dashboard">
                            <button class="btn btn-bg mt-3 px-4">Login</button>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;