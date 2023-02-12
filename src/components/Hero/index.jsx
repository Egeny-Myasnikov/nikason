import Button from '@components/UI/Button';
import Img from '@components/UI/Img';
import s from './Hero.module.scss';
const Hero = ({ aboutPage, title, img, subTitle, btnText, brand }) => {
    return (
        <div className={!aboutPage ? s.hero : 'container'}>
            {aboutPage && <h1 className="titleHero">{title}</h1>}
            <Img
                className={`${s.img}`}
                src={img}
                alt={title}
            />
            {!aboutPage &&
                <div className={`${s.info}`}>
                    <h2 className={`text ${s.subTitle}`}>{subTitle}</h2>
                    <h1 className={`titleHero ${s.title}`}>
                        {title}
                        <br />
                        {brand && brand}
                    </h1>
                    <Button mod='secondary' propsClass={`${s.btn}`}>{btnText}</Button>
                </div>

            }

        </div>
    );
};

export default Hero;