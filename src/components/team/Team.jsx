import './Team.scss'
import './adaptive.scss'
function Team() {
    return (
        <div className="team">
            <div className="container">
                <h2 className="title-a">Команда салона ЭДЕМ</h2>
                <p className="description-a">С заботой о вашей утрате</p>
                <div className="items">
                    <div className="item">
                        <img src="img/team/1.webp" alt="" />
                        <h3>Мухаметьянов Айрат Габделахатович</h3>
                        <span>Директор</span>
                    </div>
                    <div className="item">
                        <img src="img/team/2.webp" alt="" />
                        <h3>Батыршин Марат Марсович</h3>
                        <span>Ритуальный агент</span>
                    </div>
                    <div className="item">
                        <img src="img/team/3.webp" alt="" />
                        <h3>Гагарина Валентина Ильинична</h3>
                        <span>Администратор салона</span>
                    </div>
                    <div className="item">
                        <img src="img/team/4.webp" alt="" />
                        <h3>Кензебулатов Рустам Алиевич</h3>
                        <span>Бригадир закопщиков</span>
                    </div>
                    <div className="item">
                        <img src="img/team/5.webp" alt="" />
                        <h3>Куликова Светлана Владимировна</h3>
                        <span>Администратор производства</span>
                    </div>
                    <div className="item">
                        <img src="img/team/6.webp" alt="" />
                        <h3>Хаев Фирдаус Хадиуллович</h3>
                        <span>Водитель катафалка</span>
                    </div>
                    <div className="item">
                        <img src="img/team/7.webp" alt="" />
                        <h3>Халкназаров Рустам Бобобоевич</h3>
                        <span>Закопщик</span>
                    </div>
                    <div className="item">
                        <img src="img/team/8.webp" alt="" />
                        <h3>Рябов Андрей Павлович</h3>
                        <span>Закопщик</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;