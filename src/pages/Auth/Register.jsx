import Button from '../../components/Form/Button/Button';
import Heading from '../../components/Form/Heading/Heading';
import Input from '../../components/Form/Input/Input';
import './auth.scss';

const Register = () => {
  return (
    <div className="login container">
      <form>
        <Heading>Регистрация</Heading>
        <div className="login_input">
          <Input>Username</Input>
          <Input>Password</Input>
          <Input>Confirm password</Input>
        </div>
        <Button to="/register" className="btn_fullWidth btn_register">
          Регистрация
        </Button>
        <Button to="/login" className="btn_forgot_right">
          <span className="register__text">Есть аккаунт </span> Войти
        </Button>
      </form>
    </div>
  );
};

export default Register;
