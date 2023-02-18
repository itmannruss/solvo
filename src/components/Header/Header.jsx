import './header.scss';
import { Link } from 'react-router-dom';
import Logo from '../../access/logo.svg';
import Avatarka from '../../access/avatarka.png';
import PointDonw from '../../access/point_donw.svg';
import Button from '../Form/Button/Button';

const Header = ({ isAuth }) => {
  return (
    <>
      {isAuth ? (
        <div className="header">
          <div className="header_navbar container">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>

            <div className="header_navbar_right">
              <Button to="/">Добавить пост</Button>
              <div className="header_navbar_avatar">
                <Link to="/">
                  <img src={Avatarka} alt="" className="avatarka" />
                </Link>

                <img src={PointDonw} alt="" className="avatarka_pointDown" />
              </div>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Header;
