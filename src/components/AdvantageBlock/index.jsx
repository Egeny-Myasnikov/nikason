import advantageBlockList from './../../helpers/advantageBlockList';
import s from './AdvantageBlock.module.scss';
const AdvantageBlock = () => {
    return (
        <div className={s.advantageBlock}>
            <h2 className="title">NIKASON BRAND это</h2>
            <ul className={s.list}>
                {advantageBlockList.map((item, i) => <li key={i} className={s.item}>{item}</li>)}

            </ul>
        </div>
    );
};

export default AdvantageBlock;