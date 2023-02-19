import s from './OurWork.module.scss';
import ourWorkList from '@helpers/ourWorkList'
import Button from '@components/UI/Button';
const OurWork = () => {
    return (
        <section className={`container ${s.ourWork}`}>
            <h2 className='title'>Наши работы</h2>
            <ul className={`${s.list}`}>
                {
                    ourWorkList.map(({ img, text }, i) => {
                        return <li key={i} className={`${s.item}`}>
                            <figure>
                                <img src={img} alt={text} />
                                <figcaption>{text}</figcaption>
                            </figure>
                        </li>
                    })
                }
            </ul>
            <Button propsClass={`${s.btn}`}> Смотреть больше примеров </Button>
        </section>
    );
};

export default OurWork;