import Hero from '@components/Hero';
import photo from '@img/photo--1.webp'
const HeroBlock = () => {
    return (
        <Hero
            aboutPage
            img={photo}
            title='История создания мастерской NIKASON BRAND' />
    );
};

export default HeroBlock;