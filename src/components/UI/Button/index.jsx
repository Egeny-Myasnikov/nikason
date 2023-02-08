import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import s from './button.module.scss'
const Button = forwardRef(({ to, onClick, children, mod, propsClass }, ref) => {
    const customClass = mod === 'secondary' ? s.btn__secondary : s.btn__primary;
    return (<>
        {
            !to
                ?
                <button ref={ref} onClick={onClick} className={`${s.btn} ${customClass} ${propsClass}`} >
                    {children}
                </button>
                :
                <Link ref={ref} to={to} className={`${s.btn} ${customClass} ${propsClass}`} >
                    {children}
                </Link>
        }

    </>

    );
});

export default Button;