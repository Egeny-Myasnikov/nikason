import servecesList from '../../helpers/servecesList';
import TwoHalf from '../TwoHalf'
import Button from '../UI/Button';

import s from './ServecesBlock.module.scss'
const ServecesBlock = ({ ref }) => {
    return (
        <>
            <div className="container">
                <h2 className='title' >
                    Наши услуги
                    <span servecesref={ref}></span>
                </h2>
            </div>
            {servecesList.map((item, i) => {
                return <TwoHalf fxRevers key={i} img={item.img} alt={item.title} bgCol={item.bgCol}>
                    <h3 className='title3'>{item.title}</h3>
                    {item.text.map((t, i) => <p key={i} className={s.description}>{t}</p>)}
                    <Button to={item.linkTo} propsClass={s.btn} >{item.btnText}</Button>
                </TwoHalf>
            })}
        </>
    );
};

export default ServecesBlock;