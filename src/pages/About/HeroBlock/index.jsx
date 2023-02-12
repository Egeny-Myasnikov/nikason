import Hero from '@components/Hero';
import photo from '../../../assets/img/photo--1.webp'
import s from './HeroBlock.module.scss';
const HeroBlock = () => {
    return (
        <Hero
            aboutPage
            img={photo}
            title='История создания мастерской NIKASON BRAND' />
    );
};

export default HeroBlock;