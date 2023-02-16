import Button from '../../components/Form/Button/Button';
import Heading from '../../components/Form/Heading/Heading';
import Input from '../../components/Form/Input/Input';
import './auth.scss';

const Login = () => {
  return (
    <div className="login container">
      <form>
        <Heading>Войти</Heading>
        <div className="login_input">
          <Input>Username</Input>
          <Input>Password</Input>
        </div>
        <Button to="/login" className="btn_forgot">
          Забыли пароль?
        </Button>
        <Button to="/login" className="btn_fullWidth">
          Войти
        </Button>
      </form>
    </div>
  );
};

export default Login;
