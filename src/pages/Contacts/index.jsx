import { Outlet } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@components/Footer';

const Contacts = () => {
    return (
        <div className='wrapper'>
            <Header />
            <main className="main">
                <div className='container'>
                    <h1>Contacts Page</h1>
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>

    );
};

export default Contacts;