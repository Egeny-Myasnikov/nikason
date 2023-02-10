import { homePageAdvantageBlocklist, aboutPageAdvantageBlocklist } from '@helpers/advantageBlockList'
import s from './AdvantageBlock.module.scss'
const AdvantageBlock = ({ title, homePage, aboutPage }) => {
    return (
        <section className={`${s.advantageBlock} container section`}>
            {!aboutPage && <h2 className="title">{title}</h2>}
            <ul className={s.list}>
                {homePage && homePageAdvantageBlocklist.map((item, i) => <li key={i} className={s.item}>{item}</li>)}
                {aboutPage && aboutPageAdvantageBlocklist.map((item, i) => {
                    return <li key={i} >
                        <h2 className={`titleHero ${s.title}`}>{item.title}</h2>
                        <p>{item.description}</p>
                    </li>
                })}
            </ul>
        </section>
    );
};

export default AdvantageBlock;