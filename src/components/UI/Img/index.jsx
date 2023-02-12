import s from './Img.module.scss';
const Img = ({ className, src, alt }) => {
    return (
        <div className={`${className} ${s.imgBox}`}>
            <img className={`${s.imgBox__img}`} src={src} alt={alt} />
        </div>
    );
};

export default Img;