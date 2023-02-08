import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Contacts = () => {
    return (
        <div className="contacts">
            <Header />
            <div className='container'>
                <h1>Contacts Page</h1>
                <Outlet />
            </div>

        </div>

    );
};

export default Contacts;