import React, { createRef } from 'react';

import Socbar from '../Socbar';

import Button from './../UI/Button';

import s from './heroBlock.module.scss';
import homeHiroImg from './../../assets/img/home-hero.webp';
import TwoHalf from '../TwoHalf';

const HeroBlock = ({ btnOnClick }) => {
    const ref = createRef()
    return (
        <TwoHalf img={homeHiroImg} alt='Столярная мастерская NIKASON BRAND'>
            <h2 className={s.heroSubTitle}>Столярная мастерская NIKASON&nbsp;BRAND</h2>
            <h1 className='titleHero'>Изготовление и&nbsp;реставрация мебели</h1>
            <p className='text'>Авторская мебель ручной работы, сделанная с&nbsp;душой и&nbsp;трепетом.</p>
            <Button ref={ref} onClick={btnOnClick} propsClass={s.heroBtn}>Смотреть услуги </Button>

            <Socbar propsClass={s.heroSocbar} />
        </TwoHalf>
    );
};

export default HeroBlock;