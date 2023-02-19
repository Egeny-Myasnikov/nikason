import s from './TwoHalf.module.scss';
const TwoHalf = ({ children, img, alt, bgCol, fxRevers }) => {
    const customBgCol = (bgCol === 'blue' && s.twoHalf__blue) || (bgCol === 'brown' && s.twoHalf__brown) || (bgCol === 'brown-light' && s.twoHalf__brownLight) || s.twoHalf__transparent
    const revers = fxRevers ? s.twoHalfRevers : ''
    return (
        <div className={`${s.twoHalf} ${revers} ${customBgCol}`}>
            <div className={s.col}>
                <img className={s.img} src={img} alt={alt} />
            </div>

            <div className={`${s.col} ${s.colRight}`}>
                {children}
            </div>
        </div>
    );
};

export default TwoHalf;