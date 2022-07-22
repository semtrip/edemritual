import { useState, useEffect } from 'react';
import './Manual.scss'
import './adaptive.scss'
function Manual() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        if(show) {
            document.body.classList.add('show-modal')
        } else {
            document.body.classList.remove('show-modal')
        }
    }, [show]);
    return (
        <>
            <div className="container">
                <div className="manual">
                    <span className="title">Что делать, если умер близкий человек</span>
                    <div className="description">
                    Пошаговая инструкция для родных, чтоб сделать все правильно
                    <div className="btn" onClick={()=>{setShow(true)}}>Читать инструкцию</div>
                    </div>
                </div>
            </div>
            {
                show ?
                <div className="modal"  onClick={()=>{setShow(false)}}>
                    <div className="close" onClick={()=>{setShow(false)}}/>
                    <div className="block" onClick={e => e.stopPropagation()}>
                        <div className="container">
                        <div className="content">
                            <div className="left">
                                <span className="title">Порядок действий</span>
                                <span className="item"><b>1.</b> Вызовите ритуального агента салона "ЭДЕМ"</span>
                                <span className="item"><b>2.</b> Агент вызовет скорую помощь для констатации смерти.</span>
                                <span className="item"><b>3.</b> Агент вызовет сотрудника полиции для оформления протокола осмотра тела.</span>
                                <span className="item"><b>4.</b> Спецтранспорт для перевозки тела в морг предоставит салон "ЭДЕМ" - <b>БЕСПЛАТНО</b></span>
                            </div>
                            <div className="right">
                                <div className="item">
                                    <span className="title">Вызвать ритуального агента "ЭДЕМ"</span>
                                    <a href='tel:+79397442022' className="phone">+7(939) 744-20-22</a>
                                    <p className="description">Специалисты «Похоронного салона ЭДЕМ» ответят на Ваши вопросы и помогут в оформлении ритуальных услуг.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                :null
            }

        </>

    );
}

export default Manual;