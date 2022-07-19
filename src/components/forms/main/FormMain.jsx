import './FormMain.scss'
function FormMain() {
    return (
        <div className="container">
            <div className="form_container">
                <div className="form">
                    <div className="content">
                        <span className="title">Бесплатный вызов специалиста - агента ритуальных услуг</span>
                        <p className="description">Если вам нужно срочно помочь и вы устали искать решение проблемы с похоронами, отправьте свои данные. Наш специалист перезвонит вам за 30 секунд</p>
                        <div className="input">
                            <div className="item"><input type="phone" placeholder='+7 (999) 999-99-99'/></div>
                            <div className="btn">Получить консультацию</div>
                        </div>
                        <p className="privacy">«Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c <a href="/">политикой конфиденциальности</a>»</p>
                        <div className="phone">
                            <a href='/' className="number">+7(939) 744-20-22</a>
                            <span>КРУГЛОСУТОЧНО</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default FormMain;