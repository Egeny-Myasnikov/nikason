import s from './ButtonClose.module.scss';
const ButtonClose = ({ onClick, className, colorLines, bg, size }) => {
    return (
        <button
            style={{
                '--colorLines': colorLines ? colorLines : '#f00',
                '--bg': bg ? bg : 'transparent',
                '--size': size ? size : '40px'
            }}
            className={`${s.buttonClose} ${className}`}
            onClick={onClick}
        >
        </button>
    );
};

export default ButtonClose;