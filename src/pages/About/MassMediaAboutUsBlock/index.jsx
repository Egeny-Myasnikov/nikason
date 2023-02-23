import Reviews from '@components/Reviews'
import screen1 from '@img/media/media--1.webp'
import screen2 from '@img/media/media--2.webp'
import screen3 from '@img/media/media--3.webp'
import screen4 from '@img/media/media--4.webp'
// import s from './MassMediaAboutUsBlock.module.scss'
const MassMediaAboutUsBlock = () => {
    const imgs = [
        { imgPath: screen1, imgAlt: 'Издание Якутии' },
        { imgPath: screen2, imgAlt: 'Издание Якутии' },
        { imgPath: screen3, imgAlt: 'Издание Якутии' },
        { imgPath: screen4, imgAlt: 'Издание Якутии' },
    ]
    return (
        <section className={`container section`}>
            <Reviews
                title='СМИ о нас'
                description='О нашей мастерской пишут многие издания Якутии'
                imgs={imgs}
            />
        </section>
    );
};

export default MassMediaAboutUsBlock;