import { Link } from 'react-router-dom'
import logo from './assets/img/logo.jpg'

const Header = () => {
  return(
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img width="60" src={logo} alt="MainLogo" />
          </Link>
          <div>
            <h1>Shemetov Vitalya</h1>
            <p>Reactive / Front-end (React + Redux) / Задание</p>
          </div>
        </div>
        <div className="header__nav">
          <ul>
            <li className="button button--outline button--add">
              <Link to="/users">
                Создать пользователя
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header