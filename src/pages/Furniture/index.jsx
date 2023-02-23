import { useRef } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Hero from '@components/Hero';
import Reviews from '@components/Reviews';
import RequestBlock from '@components/RequestBlock';
import Gallery from '@components/Gallery';
import { moveTo } from '@utils/scroll'


import img from '@img/portfolio-hero.webp'
import reviews1 from '@img/reviews/reviews--1.webp'
import reviews2 from '@img/reviews/reviews--2.webp'
import reviews3 from '@img/reviews/reviews--3.webp'
import reviews4 from '@img/reviews/reviews--4.webp'

import s from './style.module.scss'
import ChooseUs from './ChooseUs';

const Furniture = () => {
    const furnitureRef = useRef()
    const imgs = [
        { imgPath: reviews1, imgAlt: '' },
        { imgPath: reviews2, imgAlt: '' },
        { imgPath: reviews3, imgAlt: '' },
        { imgPath: reviews4, imgAlt: '' },
    ]
    const productionSteps = [
        'Встреча с клиентом',
        'Подписание договора, внесение предоплаты',
        'Выезд к клиенту на замер (при необходимости)',
        'Составление проекта',
        'Изготовление и согласование всех стадий с клиентом',
        'Доставка и монтаж изделия (при необходимости)',
    ]
    return (
        <div className='wrapper'>
            <Header />
            <main className="main">
                <Hero
                    img={img}
                    title="Столярная мастерская"
                    brand='NIKASON BRAND'
                    subTitle='Воплотим вашу любую задумку в реальность'
                    btnText='Заказать мебель'
                    onClick={() => moveTo(furnitureRef)}
                />

                <ChooseUs />
                <section className={`section container`}>
                    <h2 className="title">Портфолио</h2>
                    <Gallery />
                </section>

                <section className={`section container`}>
                    <h2 className="title">Этапы производства</h2>
                    <ul className={`${s.list} list`}>
                        {productionSteps.map((step, i) => <li key={i} className={`${s.item}`}>{step}</li>)}
                    </ul>
                </section>
                <section className={`section container`}>
                    <Reviews title='Клиенты о нас' imgs={imgs} />
                </section>
                <span ref={furnitureRef}></span>
                <RequestBlock />
            </main>
            <Footer />
        </div>
    );
};
export default Furniture;