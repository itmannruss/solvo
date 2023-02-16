import './heading.scss';

const Heading = ({ children }) => {
  return (
    <div>
      <h1 className={`heading`}>{children}</h1>
    </div>
  );
};

export default Heading;
