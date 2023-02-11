import s from './Reviews.module.scss';
const Reviews = ({ title, description, imgs }) => {
    return (
        <>
            {title && <h2 className={`title ${s.title}`}>{title}</h2>}
            {description && <p>{description}</p>}

            <div className={`${s.imgWrapper}`}>
                {imgs &&
                    imgs.map(({ imgPath, imgAlt }, i) =>
                        <img
                            key={i}
                            className={`${s.img || 'img'}`}
                            src={imgPath}
                            alt={imgAlt || 'Без имени'}
                        />
                    )}
            </div>
        </>
    );
};

export default Reviews;