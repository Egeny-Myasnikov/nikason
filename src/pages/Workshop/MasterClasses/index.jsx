import s from './MasterClasses.module.scss';
import buffet from './../../../assets/img/workshops/restoration/buffet.webp'
import { Link } from 'react-router-dom';
const MasterClasses = () => {
    const masterClassesList = [
        {
            img: buffet,
            title: 'Буфет',
            cost: '1500'
        },


    ]
    return (
        <section className={`container ${s.masterClasses}`}>
            <h2 className="title">Мастер-классы по реставрации мебели</h2>
            <ul className={`${s.list}`}>
                {
                    masterClassesList.map(({ img, title, cost }, i) => {
                        return <Link className={`${s.link}`} to='/'><li key={i} className={`${s.item}`}>
                            <figure className={`${s.figure}`}>
                                <img src={img} alt={title} />
                                <figcaption>
                                    <h4>{title}</h4>
                                    <span>{cost} р.</span>
                                </figcaption>
                            </figure>
                        </li>
                        </Link>
                    })
                }
            </ul>
        </section>
    );
};

export default MasterClasses;