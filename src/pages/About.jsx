import Header from '@components/Header'
import Footer from '@components/Footer'
import Hero from '@components/Hero';
import photo from '../assets/img/photo--1.webp'
import photo2 from '../assets/img/photo--2.webp'
import AdvantageBlock from '@components/AdvantageBlock';
import TwoHalf from '@components/TwoHalf';

const About = () => {
    return (
        <div className='wrapper'>
            <Header />
            <main className="main">
                <Hero
                    aboutPage img={photo}
                    title='История&nbsp;создания&nbsp;мастерской NIKASON&nbsp;BRAND' />

                <AdvantageBlock aboutPage />
                <section className="container section">
                    <TwoHalf img={photo2} alt='Никита Колодезников-Матчитов' >
                        <h3 className="title3">Никита Колодезников-Матчитов</h3>
                        <strong >Основатель мастерской</strong>
                        <br /><br /><br />
                        <p >
                            С детства я был окружен творческими людьми, мой дедушка был строителем и мастером по дереву. Спустя много лет и мне передалась его любовь к дереву - в свободное время мастерил для себя небольшие  изделия из древесины.
                        </p>
                        <br />
                        <p >Более десяти лет назад построил двухэтажный гараж, на втором этаже расположилась наша мастерская. Начинал производство практически “с нуля”, с каждой зарплаты понемногу откладывал на покупку инстурментов и станков. </p>
                        <br />
                        <p >Постепенно начали появляться первые заказы. Несколько лет назад мы с супругой решили еще заняться ремонтом и реставрацией мебели. Эту идею предложили сами клиенты, поскольку периодически приходили с таким запросом. В основном, реставрацией занимается супруга Саргылана. Мы с ней одна сплоченная, дружная и отличная команда.  </p>
                    </TwoHalf>
                </section>
                <section className="container section">
                    <h2 className="title">Философия мастерской NIKASON</h2>
                    <p className="text quote">Создавать что-то по-настоящему ценное и уникальное. <br /> Дарить радость и уют в каждый дом</p>

                    <h2 className="title">СМИ о нас</h2>


                </section>

            </main>
            <Footer />
        </div>
    );
};

export default About;