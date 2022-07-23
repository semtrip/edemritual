import './Services.scss'
import './adaptive.scss'
function Services() {
    return (
        <div className="container">
            <div className="services">
                <h2 className="title-a" id='service'>Наши услуги</h2>
                <p className="description-a">Похороны близких - это очень тяжелый период в жизни. Мы готовы предложить помощь в организации похорон и прощания с усопшим. Каталог услуг разнообразен по цене от простых моделей до индивидульных. У нас вы найдете все необходимое</p>
                <div className="items">
                    <div className="item">
                        <div className="info">
                            <div className="images">
                                <img className="img-b" src="img/noroot.webp" alt="Салон ритуальных услуг «Эдем»" />
                            </div>
                            <span className="title">Ритуальный агент</span>
                            <p className="description">
                            -Оперативное прибытие сотрудника<br/>
                            -Сбор необходимых документов<br/>
                            -Организация гражданской панихиды, а также обряда панихиды
                            </p>
                        </div>
                        <a href='#callback' className="btn">Узнать стоимость</a>
                    </div>
                    <div className="item">
                        <div className="info">
                            <div className="images">
                                <img className="img" src="img/IMG_7138.webp" alt="Салон ритуальных услуг «Эдем»" />
                                <img className="img-b" src="img/IMG_7152.webp" alt="Салон ритуальных услуг «Эдем»" />
                            </div>
                            <span className="title">Копка могил</span>
                            <p className="description">
                            -Подготовка места захоронения по мусульманским и православным традициям<br/>
                            -Опускание гроба
                            </p>
                        </div>
                        <a href='#callback' className="btn">Узнать стоимость</a>
                    </div>
                    <div className="item">
                        <div className="info">
                            <div className="images">
                                <img className="img" src="img/IMG_6936.webp" alt="Салон ритуальных услуг «Эдем»" />
                                <img className="img-b" src="img/IMG_7116.webp" alt="Салон ритуальных услуг «Эдем»" />
                            </div>
                            <span className="title">Подготовка тела</span>
                            <p className="description">
                            -Омовение<br/>
                            -Бальзамирование<br/>
                            -Хранение в холодной камере<br/>
                            -Услуги визажиста
                            </p>
                        </div>
                        <a href='#callback' className="btn">Узнать стоимость</a>
                    </div>
                    <div className="item">
                        <div className="info">
                            <div className="images">
                                <img className="img" src="img/IMG_6979.webp" alt="Салон ритуальных услуг «Эдем»" />
                                <img className="img-b" src="img/_.webp" alt="Салон ритуальных услуг «Эдем»" />
                            </div>
                            <span className="title">Прощальный зал</span>
                            <p className="description">
                            -Большой зал до 50 человек<br/>
                            -В соответствии с религиозными требованиями.е<br/>
                            -Круглосуточно
                            </p>
                        </div>
                        <a href='#callback' className="btn">Узнать стоимость</a>
                    </div>
                    <div className="item">
                        <div className="info">
                            <div className="images">
                                <img className="img" src="img/IMG_6960.webp" alt="Салон ритуальных услуг «Эдем»" />
                                <img className="img-b" src="img/IMG_7040.webp" alt="Салон ритуальных услуг «Эдем»" />
                            </div>
                            <span className="title">Ритуальный транспорт</span>
                            <p className="description">
                            -Перевозка тела умершего в морг, церковь, мечеть, на кладбище<br/>
                            -Перевозка родственников с кладбища
                            </p>
                        </div>
                        <a href='#callback' className="btn">Узнать стоимость</a>
                    </div>
                    <div className="item">
                        <div className="info">
                            <div className="images">
                                <img className="img" src="img/IMG_6954.webp" alt="Салон ритуальных услуг «Эдем»" />
                                <img className="img-b" src="img/IMG_6945.webp" alt="Салон ритуальных услуг «Эдем»" />
                            </div>
                            <span className="title">Бригада закопщиков</span>
                            <p className="description">
                            -Доставят гроб и ритуальные товары<br/>
                            -Знают, как правильно вынести гроб и опустить в могилу
                            </p>
                        </div>
                        <a href='#callback' className="btn">Узнать стоимость</a>
                    </div>
                    <div className="item">
                        <div className="info">
                            <div className="images">
                                <img className="img" src="img/IMG_7093.webp" alt="Салон ритуальных услуг «Эдем»" />
                                <img className="img-b" src="img/IMG_7035.webp" alt="Салон ритуальных услуг «Эдем»" />
                            </div>
                            <span className="title">Памятники, гробы и другое</span>
                            <p className="description">
                            -Производители полного цикла.<br/>
                            Сами изготавливаем гранитные и мраморные памятники, гробы и другие ритуальные товары.
                            </p>
                        </div>
                        <a href='#callback' className="btn">Узнать стоимость</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;