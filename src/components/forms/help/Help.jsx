import './Help.scss'
import './adaptive.scss'
function Help(props) {
    return (
        <div className="help">
            <div className="container">
                <div className="content">
                    <span className="title">{props.title}</span>
                    <span className="title_two">{props.title2}</span>
                    <p className="description">Наши специалисты готовы круглосуточно ответить на все Ваши вопросы и помочь в организации сопровождения похорон.</p>
                    <a className="btn" href='#callback'>+7 (939) 744-20-22</a>
                    <span className="btn-label">Нажмите кнопку и мы перезвоним вам за 30 секунд<br/>или позвоните нам по указанному номеру</span>
                </div>
            </div>
        </div>
    );
}

export default Help;