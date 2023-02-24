import { useState } from 'react';
import s from './MasterClasses.module.scss';
import buffet from '@img/workshops/restoration/buffet.webp'
import imgBefore1 from '@img/beforeAfter/before--1.webp';
import imgAfter1 from '@img/beforeAfter/after--1.webp';
import Modal from '@components/Modal';
import Button from '@components/UI/Button';
import BeforeAfter from '@components/BeforeAfter';
const MasterClasses = ({ masterClassesRef }) => {
    const [open, setOpen] = useState(false)
    const [id, setId] = useState(0)
    const openModal = (id) => {
        setId(id)
        open || setOpen(true)
    }
    const masterClassesList = [
        {
            id: 0,
            img: buffet,
            imgBefore: imgBefore1,
            imgAfter: imgAfter1,
            title: 'Буфет',
            cost: '1500'
        }
    ]
    return (
        <section className={`container ${s.masterClasses}`}>
            <h2 className="title">
                Мастер-классы по реставрации мебели
                <span ref={masterClassesRef}></span>
            </h2>
            <ul className={`${s.list}`}>
                {
                    masterClassesList.map(({ id, img, title, cost }) => {
                        return <li key={id} onClick={() => openModal(id)} className={`${s.item}`}>
                            {console.log()}
                            <figure className={`${s.figure}`}>
                                <img src={img} alt={title} />
                                <figcaption>
                                    <h4>{title}</h4>
                                    <span className='priceRub'>{cost}</span>
                                </figcaption>
                            </figure>
                        </li>
                    })
                }
            </ul>
            <Modal title={masterClassesList[id].title} open={open} setOpen={setOpen}>
                <div className={`${s.modalContent}`}>
                    <BeforeAfter
                        size='330px'
                        imgBefore={masterClassesList[id].imgBefore}
                        imgBeforeAlt={`${masterClassesList[id].title} до реставрации`}
                        imgAfter={masterClassesList[id].imgAfter}
                        imgAfterAlt={`${masterClassesList[id].title} после реставрации`}
                    />
                    <div className={`${s.col}`}>
                        <h4 className={`${s.modalTitle} title3`}>{masterClassesList[id].title}</h4>
                        <span className={`${s.modalPrice} priceRub`}>{masterClassesList[id].cost}</span>
                        <Button propsClass={`${s.modalBtn}`}>Купить</Button>
                        <p>На мастер - классе мы разберем:</p>
                        <ol className={`${s.modalList}`}>
                            <li> разборка мебели и фурнитуры</li>
                            <li> удаление старой краски</li>
                            <li>ремонт</li>
                            <li>нанесение краски, декор</li>
                            <li>сборка мебели и установка фурнитуры</li>
                        </ol>
                        <strong>После оплаты вы получите ссылку на видео-урок на указанную вами почту. </strong>
                    </div>
                </div>
            </Modal>

        </section>
    );
};

export default MasterClasses;