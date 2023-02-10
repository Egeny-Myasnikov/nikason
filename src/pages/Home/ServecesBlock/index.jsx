import TwoHalf from '@components/TwoHalf'
import Button from '@components/UI/Button'
import servecesList from '@helpers/servecesList'
import s from './ServecesBlock.module.scss'
const ServecesBlock = ({ servecesref }) => {
    return (
        <>
            <div className="container">
                <h2 className='title' >
                    Наши услуги
                    <span ref={servecesref}></span>
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