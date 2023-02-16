import './header.scss';
import { Link } from 'react-router-dom';
import Logo from '../../access/logo.svg';
import Button from '../Form/Button/Button';

const Header = () => {
  return (
    <div className="header">
      <div className="header_navbar container">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>

        <div className="header_navbar_btn">
          <Button to="/login">Войти</Button>
          <Button to="/register" className="btn-outline">
            Регистрация
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
