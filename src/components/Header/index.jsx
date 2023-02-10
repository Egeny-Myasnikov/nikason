import Navbar from '@components/Navbar';
import s from './header.module.scss'

const Header = () => {
    return (
        <header className={s.header}>
            <Navbar />
        </header>
    );
};

export default Header;

