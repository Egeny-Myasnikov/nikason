import s from './sprites.module.scss'
import sprite from './../../../assets/sprite.svg';
const Icon = ({ icon, white, big }) => {
    return (
        <svg className={big ? s.svgBig : s.svgLg}>
            <use className={white ? s.svgLg__iconWhite : s.svgLg__icon} href={`${sprite}#${icon}`} />
        </svg>
    );
};

export default Icon;