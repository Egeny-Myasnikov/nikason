import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import s from './navbar.module.scss'
import logo from "./../../assets/img/logo-nikason.webp"
import { navList1, navList2 } from '@helpers/navList'
const Navbar = () => {
    const hasActive = ({ isActive }) => isActive ? `link  ${s.link} link__active` : `link ${s.link}`

    const [size, setSize] = useState(window.innerWidth);
    const [open, setOpen] = useState('');

    const resizeHandler = () => {
        setSize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        resizeHandler();
        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    const openNav = () => {
        if (size <= 768) open === '' ? setOpen(s.open) : setOpen('')
    }

    return (
        <>
            {size <= 768
                &&
                <div className={`${s.flex} container`}>
                    <NavLink className={hasActive + s.linkLogo} to={'/'}>
                        <img src={logo} alt="logo Nikason" />
                    </NavLink>
                    <button onClick={openNav} className={s.burger}><span className={s.line}></span></button>
                </div>
            }
            <nav onClick={openNav} className={`${s.navbar} container ${open}`}>
                {navList1.map((nav, i) => <NavLink key={i} className={hasActive} to={nav.path}>{nav.text}</NavLink>)}
                {size >= 768
                    &&
                    <NavLink className={hasActive} to={'/'}>
                        <img src={logo} alt="logo Nikason" />
                    </NavLink>
                }

                {navList2.map((nav, i) => <NavLink key={i} className={hasActive} to={nav.path}>{nav.text}</NavLink>)}

            </nav>
        </>
    );
};

export default Navbar;