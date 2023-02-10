import s from './QualityAssuranceBlock.module.scss'
import logo from './../../../assets/img/logo-big.webp'
const QualityAssuranceBlock = () => {
    return (
        <div className={`${s.qualityAssuranceBlock} container`}>
            <h2 className={`${s.title} title`} >Гарантия качества мебели от NIKASON BRAND</h2>
            <div className={s.wrapper}>
                <p className='text' >На каждое изделие ставим авторский логотип (клеймо) как знак качества и узнаваемости мастера. Таким образом мастер несёт ответственность за каждое изделие помеченное печатью. Есть гарантия на 12 месяцев.
                </p>
                <img className={s.logo} src={logo} alt="Знак качества Nikason" />
            </div>

        </div>

    );
};

export default QualityAssuranceBlock;