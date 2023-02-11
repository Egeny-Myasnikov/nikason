import Button from '@components/UI/Button';
import s from './RequestBlock.module.scss';
const RequestBlock = () => {
    return (
        <section className={`container section ${s.requestBlock}`}>
            <h2 className="title">Оставьте заявку и мы с вами свяжемся</h2>
            <Button propsClass={`${s.btn}`}>Оставить заявку </Button>
        </section>
    );
};

export default RequestBlock;