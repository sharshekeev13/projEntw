import VerteidigungForm from './VerteidigungForm';

const EditVerteidigung = () => {
  const existingData = {
    thema: 'Datenbanken',
    author: 'Azilya',
    betreuer: 'Frau Gewiniger',
    datum: '2025-06-01',
    raum: 'A401',
    keywords: 'SQL, UI/UX',
    studiengang: 'Informatik',
    fakultät: 'WI',
    artDerArbeit: 'Bachelorarbeit',
  };

  return (
    <VerteidigungForm
      initialData={existingData}
      onSubmit={(data) => {
        console.log('Geänderte Verteidigung:', data);
        // здесь можешь вызывать API для обновления данных
      }}
    />
  );
};

export default EditVerteidigung;
