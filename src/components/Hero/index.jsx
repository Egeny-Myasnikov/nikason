import s from './Hero.module.scss';
const Hero = ({ aboutPage, title, img, subTitle }) => {
    return (
        <div className={!aboutPage ? s.hero : 'container'}>
            {aboutPage && <h1 className="titleHero">{title}</h1>}
            <img className='img' src={img} alt={title} />
            {!aboutPage &&
                <>
                    <h2 className={`text ${s.subTitle}`}>{subTitle}</h2>
                    <h1 className={`titleHero ${s.title}`}>{title}</h1>
                </>

            }

        </div>
    );
};

export default Hero;