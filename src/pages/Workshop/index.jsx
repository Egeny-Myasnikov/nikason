import Header from '@components/Header';
import Footer from '@components/Footer';
import Hero from '@components/Hero';
import img from './../../assets/img/workshop-hero.webp'
import imgSecond from './../../assets/img/beforeAfter/bg--1.webp'
import OurWork from './OurWork';
import Technique from './Technique';
import MasterClasses from './MasterClasses';
import Guide from './Guide';

const Workshop = () => {
    return (
        <div className='wrapper'>
            <Header />
            <main className="main">
                <Hero
                    img={img}
                    title='Нам доверяют мебель с историей в 120 лет'
                    btnText='Смотреть мастер-классы' />
                <OurWork />
                <Technique />
                <Hero
                    img={imgSecond}
                    title='Подари вторую жизнь старой мебели и сохрани историю вашей семьи'
                />
                <MasterClasses />
                <Guide />
            </main>
            <Footer />
        </div>
    );
};
export default Workshop;