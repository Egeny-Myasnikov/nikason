import Button from '@components/UI/Button';
import s from './Hero.module.scss';
const Hero = ({ aboutPage, title, img, subTitle, btnText }) => {
    return (
        <div className={!aboutPage ? s.hero : 'container'}>
            {aboutPage && <h1 className="titleHero">{title}</h1>}
            <img className={`${s.img} img`} src={img} alt={title} />
            {!aboutPage &&
                <div className={`${s.info}`}>
                    <h2 className={`text ${s.subTitle}`}>{subTitle}</h2>
                    <h1 className={`titleHero ${s.title}`}>{title}</h1>
                    <Button mod='secondary' propsClass={`${s.btn}`}>{btnText}</Button>
                </div>

            }

        </div>
    );
};

export default Hero;