import Img from '@components/UI/Img';

import s from './Gallery.module.scss';
//big img
import bigImg0 from '@img/portfolio/big/port--0.webp'
//min img
import minImg0 from '@img/portfolio/port-min--0.jpg'
import minImg1 from '@img/portfolio/port-min--1.webp'
import minImg2 from '@img/portfolio/port-min--2.webp'
import minImg3 from '@img/portfolio/port-min--3.webp'
import minImg4 from '@img/portfolio/port-min--4.webp'
import minImg5 from '@img/portfolio/port-min--5.webp'
import minImg6 from '@img/portfolio/port-min--6.webp'
const Gallery = () => {
    const minImgs = [
        { imgPath: minImg0, imgAlt: 'Nikason' },
        { imgPath: minImg1, imgAlt: 'Nikason' },
        { imgPath: minImg2, imgAlt: 'Nikason' },
        { imgPath: minImg3, imgAlt: 'Nikason' },
        { imgPath: minImg4, imgAlt: 'Nikason' },
        { imgPath: minImg5, imgAlt: 'Nikason' },
        { imgPath: minImg6, imgAlt: 'Nikason' },
    ]
    return (
        <div className={`${s.gallery}`}>
            <div className={`${s.bigImgBox}`}>
                <Img
                    className={`${s.bigImgBox__img}`}
                    src={bigImg0}
                    alt="alt"
                />
            </div>
            <div className={`${s.minImgBox}`}>
                {minImgs.map(({ imgPath, imgAlt }, i) => <Img
                    key={i}
                    className={`${s.minImgBox__img}`}
                    src={imgPath}
                    alt={imgAlt}
                />
                )}
            </div>
        </div>
    );
};

export default Gallery;