import { useEffect } from "react";
import { scrollToTop } from "@utils/scroll";
import Navbar from '@components/Navbar';
import s from './header.module.scss'

const Header = () => {
    useEffect(() => {
        scrollToTop()

        return () => {

        };
    }, []);
    return (
        <header className={s.header}>
            <Navbar />
        </header>
    );
};

export default Header;

