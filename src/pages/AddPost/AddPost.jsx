import './addcard.scss';
import Heading from '../../components/Form/Heading/Heading';
import addFile from '../../access/addFile.png';
import Input from '../../components/Form/Input/Input';
import Button from '../../components/Form/Button/Button';

const AddPost = () => {
  return (
    <form className="addPost container">
      <Heading> Добавить Пост </Heading>
      <div className="addFile">
        <img src={addFile} alt="" />
        <span>Выберите файл(ы) </span>
      </div>
      <div className="addform_wrapp">
        <Input>Введите название поста </Input>
        <Input list="cities">Введите описание поста </Input>
        <textarea placeholder="Введите описание поста"></textarea>
      </div>
      <Button className="btn_fullWidth" to="/addcard">
        Добавить
      </Button>
    </form>
  );
};

export default AddPost;
