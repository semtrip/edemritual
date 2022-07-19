import './Header.scss'
function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="content">
                    <div className="logo">
                        <span>ЭДЕМ</span>
                        <span>Салон ритуальных услуг</span>
                    </div>
                    <ul className="nav">
                        <li>Услуги</li>
                        <li>О нас</li>
                        <li>Озывы</li>
                        <li>Контакты</li>
                    </ul>
                    <div className="phone">
                        <a href='/' className="number">
                            <span>+7(939) 744-20-22</span>
                            <span>Круглосуточно</span>
                        </a>
                        <div className="btn">Перезвоните мне</div>
                    </div>
                </div>
            </div> 
        </div>

    );
}

export default Header;