import './input.scss';

const Input = ({ list, value, name, type, textarea, children }) => {
  return (
    <>
      {list ? (
        <>
          <input name="city" list={list} placeholder={children} />
          <datalist id="cities">
            <option value="Naples" />
            <option value="London" />
            <option value="Berlin" />
            <option value="New York" />
            <option value="Frattamaggiore" />
          </datalist>
        </>
      ) : (
        <input type="text" placeholder={children} />
      )}
    </>
  );
};

export default Input;
