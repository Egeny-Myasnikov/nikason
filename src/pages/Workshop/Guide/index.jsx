import TwoHalf from '@components/TwoHalf';
import Button from '@components/UI/Button';
import img from './../../../assets/img/workshops/carpentry/carpentry-for-beginners.webp'
import s from './Guide.module.scss';
const Guide = () => {
    return (
        <section className="section">
            <TwoHalf img={img} alt='Nikason'>
                <h2 className="title">Руководство по редизайну деревянной мебели</h2>
                <p className="text">Здесь мы собрали всю информацию от подбора инструментов и материалов до сборки мебели и фурнитуры. Чтобы вы самостоятельно могли разобраться с нюансами работы со старой мебелью из дерева. Наше руководство непременно станет вашей настольной книгой по реставрации мебели.</p>
                <Button propsClass={`${s.btn}`}>Подробнее</Button>
            </TwoHalf>
        </section>

    );
};

export default Guide;