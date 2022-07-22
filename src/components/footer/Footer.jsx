import './adaptive.scss'
import './Footer.scss'
function Footer() {
    const date = new Date()
    return (
        <>
            <div className="footer">
                <div id="map">
                <iframe title='map' src="https://yandex.ru/map-widget/v1/?um=constructor%3A84e8436074464c5105d20945d9e594d49ff6b27d0266b9b0c5ba34efdb4d3333&amp;source=constructor" width="100%" height="100%" frameBorder="0"></iframe>
                </div>
                <div className="contact">
                    <span className="title">Контакты</span>
                    <span>Адрес:</span>
                    <span>Набережные Челны, ул. Комарова, д.34/3</span>
                    <span>Телефон:</span>
                    <div className="phone">
                        <a className="number" href='tel:+79397442022'>8 (939) 744-20-22</a>
                        <a className="number"  href='tel:+79274694771'>8 (927) 469-47-71</a>
                        <a className="number"  href='tel:+78552753477'>8 (855) 275-34-77</a>
                    </div>
                    <span>Режим работы:</span>
                    <b>Круглосуточно</b>
                </div>
            </div>
            <div className="copy">
                <div className="container">
                    <div className="content">
                        <span>© 2003-{date.getFullYear()}</span>
                        <a href='/'>Политика конфиденциальности</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;