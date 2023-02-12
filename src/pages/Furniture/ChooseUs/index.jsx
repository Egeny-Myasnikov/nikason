import s from './ChooseUs.module.scss';
const ChooseUs = () => {
    const list = [
        { title: 'Давно на рынке', description: 'Опыт работы на рынке больше 10 лет' },
        { title: 'Гарантия качества', description: 'Предоставляем гарантию 12 месяцев на изделия ' },
        { title: 'Юридическая прозрачность', description: 'Заключаем с каждым клиентом договор' },
        { title: 'Экологичность', description: 'Мебель из натуральной древесины, краски без токсичного состава' },
        { title: 'Эксклюзивность', description: 'Каждая мебель изготовлена по индивидуальному дизайну ' },
        { title: 'Долговечность', description: 'Мебель из массива дерева прослужит даже вашим детям' },
    ]
    return (
        <section className={`section container ${s.chooseUs}`}>
            <h2 className="title">Почему выбирают нас</h2>
            <ul className={`${s.list} list`}>
                {list.map(({ title, description }, i) => {
                    return <li className={`${s.item}`} key={i}>
                        <h3 className={`${s.title}`}>{title}</h3>
                        <p className={`text ${s.text}`}>{description}</p>
                    </li>
                }
                )}
            </ul>
        </section>
    );
};

export default ChooseUs;