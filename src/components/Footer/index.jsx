import { NavLink } from 'react-router-dom';
import { links, navList1, navList2 } from '@helpers/navList';
import Socbar from '@components/Socbar';
import s from './footer.module.scss';
const Footer = () => {
    const hasActive = ({ isActive }) => isActive ? 'link link__active' : 'link'
    return (
        <footer className={s.footer}>
            <div className={`${s.container} container`} >
                <div>
                    <p className={s.text}>ИП Колодезников-Матчитов Н.И.</p>
                    <p className={s.text}>ИНН 143515646663</p>
                </div>
                <nav className={s.nav}>
                    {navList1.map((nav, i) => <NavLink key={i} className={hasActive} to={nav.path}>{nav.text}</NavLink>)}
                </nav>
                <nav className={s.nav}>
                    {navList2.map((nav, i) => <NavLink key={i} className={hasActive} to={nav.path}>{nav.text}</NavLink>)}
                </nav>
                <div className={s.links}>
                    {links.map((link, i) => <NavLink key={i} className={hasActive} to={link.path}>{link.text}</NavLink>)}
                </div>
                <Socbar white big />
            </div>
        </footer >
    );
};

export default Footer; 