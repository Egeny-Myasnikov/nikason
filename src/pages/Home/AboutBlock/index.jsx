import TwoHalf from '@components/TwoHalf'
import Button from '@components/UI/Button'
import imgPhoto from '@img/photo--1-1.webp'
import s from './AboutBlock.module.scss'

const AboutBlock = () => {
    return (<>
        <div className="container">
            <h2 className="title">NIKASON BRAND  это&nbsp;семейная мастеркая</h2>
        </div>
        <TwoHalf fxRevers img={imgPhoto} alt='Столярная мастерская NIKASON BRAND' bgCol='blue'>
            <h3 className={`title3 ${s.title}`}>Саргылана и Никита Колодезниковы-Матчитовы</h3>
            <p className={`text ${s.text}`}>Саргылана - рестовратор-декоратор, преображает и дарит вторую жизнь старой мебели.</p>
            <p className={`text ${s.text}`}>Никита - мастер по дереву, вся мебель делается его умелыми руками.</p>

            <Button to={'/about'} propsClass={s.btn}>Подробнее о нас</Button>

        </TwoHalf>
    </>
    );
};

export default AboutBlock;