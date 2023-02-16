import './button.scss';
import { Link } from 'react-router-dom';

const Button = ({ to, className, children }) => {
  return (
    <>
      {to ? (
        <Link to={to} className={`btn  ${className || ''}`}>
          {children}
        </Link>
      ) : (
        <button className={`btn  ${className || ''}`}>{children}</button>
      )}
    </>
  );
};

export default Button;
