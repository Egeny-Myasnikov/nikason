import s from './Technique.module.scss';
const Technique = () => {
    const techniqueList = ['Снятие старой краски', 'Устранение царапин и мелких дефектов', 'Ремонт маленьких и больших сколов', 'Ремонт поломанной и расклеившейся мебели', 'Замена старых поврежденных деталей', 'Приемы и идеи декора. Улучшение дизайна старой мебели', 'Покраска изделия']
    return (
        <section className={` container ${s.technique}`}>
            <h2 className='title'>Какие техники изучите на МК</h2>
            <ul className={`${s.list}`}>
                {
                    techniqueList.map((item, i) => {
                        return <li key={i} className={`${s.item}`}>
                            {item}
                        </li>
                    })
                }

            </ul>
        </section>
    );
};

export default Technique;