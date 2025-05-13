
import VerteidigungForm from './VerteidigungForm';

const CreateVerteidigung = () => {
  return (
    <VerteidigungForm
      onSubmit={(data) => {
        console.log('Neue Verteidigung:', data);
        // здесь ты можешь добавить отправку данных на сервер
      }}
    />
  );
};

export default CreateVerteidigung;
