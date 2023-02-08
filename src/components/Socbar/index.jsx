import Icon from '../UI/Sprites';
import s from './socbar.module.scss';
const Socbar = ({ propsClass, white, big }) => {
    return (
        <div className={s.socbar + ' ' + propsClass}>
            <a href='https://web.telegram.org/'>
                <Icon icon='telegram' big={big} white={white} />
            </a>
            <a href='https://www.instagram.com/mebel_ot_nikason/'>
                <Icon icon='instagram' big={big} white={white} />
            </a>
            <a href='https://api.whatsapp.com/send?phone=79679272227'>
                <Icon icon='whatsapp' big={big} white={white} />
            </a>
        </div>
    );
};

export default Socbar;