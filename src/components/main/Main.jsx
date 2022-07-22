import './Main.scss'
import './adaptive.scss'
function Main() {
    return (
    <div className='main'>
        <div className="container">
            <span className="title">Ритуальные услуги в Набережных Челнах</span>
            <span className="description">Только вы решаете, как проститься с близким.<br/>А мы помогаем вам это организовать.</span>
            <div className="items">
                <span className="item">Круглосуточная консультация специалиста и выезд ритуального агента <b>24/7 БЕСПЛАТНО</b></span>
                <span className="item">Низкие цены за счет<br/> собственного производства и автопарка</span>
                <span className="item">Оформление места<br/> захоронения, кремация, организация похорон</span>
            </div>
        </div>
    </div>
    );
}

export default Main;