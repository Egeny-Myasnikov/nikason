import { homePageAdvantagelist, aboutPageAdvantagelist } from '@helpers/advantageList'
import s from './Advantage.module.scss'
const Advantage = ({ title, homePage, aboutPage, propClasses }) => {
    return (
        <section className={`${s.Advantage} container section ${propClasses}`}>
            {!aboutPage && <h2 className="title">{title}</h2>}
            <ul className={s.list}>
                {homePage && homePageAdvantagelist.map((item, i) => <li key={i} className={s.item}>{item}</li>)}
                {aboutPage && aboutPageAdvantagelist.map((item, i) => {
                    return <li key={i} >
                        <h2 className={`titleHero ${s.title}`}>{item.title}</h2>
                        <p>{item.description}</p>
                    </li>
                })}
            </ul>
        </section>
    );
};

export default Advantage;