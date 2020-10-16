import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className="content">
                <Navbar />
                <HeaderMain />
            </div>
        </div>
    );
};

export default Header;