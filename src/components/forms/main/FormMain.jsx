import {useState} from 'react'
import InputMask from 'react-input-mask';

import './FormMain.scss'
import './adaptive.scss'

function PhoneInput(props) {
    return (
      <InputMask 
        mask='+7 (999) 999-99-99' 
        value={props.value}
        maskChar={null} 
        onChange={props.onChange}
        placeholder='+7 (999) 999-99-99'
        autoComplete="new-password">  
      </InputMask>
    );
  }


function FormMain() {
    const [phone, setPhone] = useState('');
    const handleInput = ({ target: { value } }) => setPhone(value);
    const [success, setSuccess] = useState(false);
    const sendForm = () => {
        if (phone.length === 18) {
            let formData = new FormData();
            formData.append('phone', phone)
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "php/send.php", true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send(`phone=${phone}`);
            xhttp.onload = function() {
                if (xhttp.status != 200) {
                  alert(`Ошибка ${xhttp.status}: ${xhttp.statusText}`);
                } else {
                    if(xhttp.response === 'success') {
                        setSuccess(true)
                    } else {
                        setSuccess(false)
                    }
                }
            };
        } else {
            return
        }
      }
    return (
        <div className="container">
            <div className="form_container">
                <div className="form">
                    <div className="content">
                    {
                        !success ?
                        <>
                            <span className="title">Бесплатный вызов специалиста - агента ритуальных услуг</span>
                            <p className="description">Если вам нужно срочно помочь и вы устали искать решение проблемы с похоронами, отправьте свои данные. Наш специалист перезвонит вам за 30 секунд</p>
                            <div className="input">
                                <div className="item">
                                    <PhoneInput
                                        value={phone} 
                                        onChange={handleInput}>
                                    </PhoneInput>
                                </div>
                                <div className="btn" onClick={sendForm}>Получить консультацию</div>
                            </div>
                            <p className="privacy">«Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c <a href="/">политикой конфиденциальности</a>»</p>
                            <div className="phone">
                                <a href='tel:+79397442022' className="number">+7(939) 744-20-22</a>
                                <span>КРУГЛОСУТОЧНО</span>
                            </div>
                        </>
                        :
                        <div className="success">
                            <img src="img/success.png" alt="" />
                            <span className="title">Заявка отправлена успешно</span>
                            <p className="description">Наш специалист скоро свяжется с вами.</p>
                        </div>
                    }
                    </div>
                </div>
            </div>
        </div>

    );
}

export default FormMain;