import { useRef } from 'react';
import { moveTo } from '@utils/scroll'
import Header from '@components/Header';
import Footer from '@components/Footer';
import Hero from '@components/Hero';
import img from '@img/workshop-hero.webp'
import imgSecond from '@img/beforeAfter/bg--1.webp'
import OurWork from './OurWork';
import Technique from './Technique';
import MasterClasses from './MasterClasses';
import Guide from './Guide';



const Workshop = () => {
    const masterClassesRef = useRef(null);

    return (
        <div className='wrapper'>
            <Header />

            <main className="main">
                <Hero
                    img={img}
                    title='Нам доверяют мебель с историей в 120 лет'
                    btnText='Смотреть мастер-классы'
                    onClick={() => moveTo(masterClassesRef)}
                />
                <OurWork />
                <Technique />
                <Hero
                    img={imgSecond}
                    title='Подари вторую жизнь старой мебели и сохрани историю вашей семьи'
                />
                <MasterClasses masterClassesRef={masterClassesRef} />
                <Guide />
            </main>
            <Footer />
        </div>
    );
};
export default Workshop;