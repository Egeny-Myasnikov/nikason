import ButtonClose from '@components/UI/ButtonClose';
import { useEffect } from 'react';
import s from './Modal.module.scss';
const Modal = ({ title, children, open, setOpen }) => {
    useEffect(() => {
        open && (document.body.style.overflow = 'hidden')
        return () => {
            document.body.removeAttribute('style')
        };
    }, [open]);
    return (
        <div className={`${s.modal} ${open ? s.modalOpen : ''}`}>
            <span onClick={() => setOpen(false)} className={`${s.overlay} `}></span>
            <div className={`${s.window} `}>
                <header className={`${s.header} `}>
                    <h3 className={`${s.header__title} title3`}>{title}</h3>
                    <ButtonClose
                        onClick={() => setOpen(false)}
                        className={`${s.header__btnClose} `}
                        size='30px'
                        colorLines='#a22'
                    />

                </header>
                <div className={`${s.content} `}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;