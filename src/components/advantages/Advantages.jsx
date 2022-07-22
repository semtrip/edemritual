import './Advantages.scss'
import './adaptive.scss'
function Advantages() {
    return (
        <div className="advantages">
            <div className="container">
                <h2 className="title-a">Что вы получаете выбрав нашу компанию</h2>
                <div className="items">
                    <div className="item">
                        <div className="top">
                            <img src="img/ico/2-1.svg" alt="" />
                            <span>Цена ниже</span>
                        </div>
                        <p>Салон ЭДЕМ производитель полного цикла. Сами изготавливаем гранитные и мраморные памятники, гробы и другие ритуальные товары.</p>
                    </div>
                    <div className="item">
                        <div className="top">
                            <img src="img/ico/2-2.svg" alt="" />
                            <span>Гарантия</span>
                        </div>
                        <p>Держим высокий уровень любых наших услуг и товаров. Проводим двух ступенчатую проверку качества. Даем гарантиюна памятники 1 год.</p>
                    </div>
                    <div className="item">
                        <div className="top">
                            <img src="img/ico/2-3.svg" alt="" />
                            <span>Похороны разных конфессий</span>
                        </div>
                        <p>Организуем прощальные церемонии по канонам разных конфессий (ислам, православие).</p>
                    </div>
                    <div className="item">
                        <div className="top">
                            <img src="img/ico/2-4.svg" alt="" />
                            <span>Рассрочка платежа</span>
                        </div>
                        <p>Понимаем, что уход близкого может стать неожиданным. Поэтому предоставляем беспроцентную рассрочку платежа.</p>
                    </div>
                    <div className="item">
                        <div className="top">
                            <img src="img/ico/2-5.svg" alt="" />
                            <span>Временное хранение</span>
                        </div>
                        <p>Предоставлем услугу хранения тела в холодильной камере до прощальной церемонии.</p>
                    </div>
                    <div className="item">
                        <div className="top">
                            <img src="img/ico/2-6.svg" alt="" />
                            <span>Скидки до 15 %</span>
                        </div>
                        <p>Предоставляем пенсионерам и ветеранам скидки 10-15 %.</p>
                    </div>
                    <div className="item">
                        <div className="top">
                            <img src="img/ico/2-7.svg" alt="" />
                            <span>Специализированные автомобили</span>
                        </div>
                        <p>Собственный автопарк из трех катофалков.</p>
                    </div>
                    <div className="item">
                        <div className="top">
                            <img src="img/ico/2-8.svg" alt="" />
                            <span>Прощальный зал</span>
                        </div>
                        <p>Собственный зал, для проведения прощальных церемоний.</p>
                    </div>
                    <div className="item">
                        <div className="top">
                            <img src="img/ico/2-9.svg" alt="" />
                            <span>Расположение</span>
                        </div>
                        <p>Распологаемся на территории морга<br/>
                        ул. Комарова, д.34/3<br/>
                        <a href="tel:+79397442022">8 (939) 744-20-22</a> - Круглосуточно
                        </p>
                    </div>
                </div>
                <a className="btn" href="#callback">Пригласить ритуального агента</a>
            </div>
        </div>
    );
}

export default Advantages;