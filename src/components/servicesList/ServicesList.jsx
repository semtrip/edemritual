import './ServicesList.scss'
import './adaptive.scss'
function ServicesList() {
    return (
        <div className="services_list">
            <div className="container">
                <h2 className="title-a">“ЭДЕМ”</h2>
                <p className="description-a">Весь спектр ритуальных услуг и организация похорон в Набережных Челнах</p>
                <div className="content">
                    <div className="item">
                        <img src="img/ico/1.svg" alt="" />
                        <span>Бесплатная<br/>консультация</span>
                    </div>
                    <div className="item">
                        <img src="img/ico/2.svg" alt="" />
                        <span>Оформление<br/>документов</span>
                    </div>
                    <div className="item">
                        <img src="img/ico/3.svg" alt="" />
                        <span>Проведение<br/>поминок</span>
                    </div>
                    <div className="item">
                        <img src="img/ico/4.svg" alt="" />
                        <span>Подготовка к<br/>похоронам</span>
                    </div>
                    <div className="item">
                        <img src="img/ico/5.svg" alt="" />
                        <span>Проведение прощальной<br/>церемонии</span>
                    </div>
                    <div className="item">
                        <img src="img/ico/6.svg" alt="" />
                        <span>Организация<br/>захоронения, кремация</span>
                    </div>
                    <div className="item">
                        <img src="img/ico/7.svg" alt="" />
                        <span>Предоставление<br/>ритуального транспорта</span>
                    </div>
                    <div className="item">
                        <img src="img/ico/8.svg" alt="" />
                        <span>Предоставление ритуальных<br/>принадлежностей</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesList;