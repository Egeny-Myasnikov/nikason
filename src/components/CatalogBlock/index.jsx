import s from './CatalogBlock.module.scss';
import cataloglist from '../../helpers/catalogList';
const CatalogBlock = () => {
    return (
        <div className={s.catalogBlock}>
            <h2 className="title">Более 10 лет мы&nbsp;производим</h2>
            <ul className={s.list}>
                {cataloglist.map((item, i) => {
                    return <li key={i} className={s.item}>
                        <figure>
                            <img src={item.img} alt={item.text} />
                            <figcaption>{item.text}</figcaption>
                        </figure>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default CatalogBlock;