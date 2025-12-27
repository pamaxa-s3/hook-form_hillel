import { useFormContext } from 'react-hook-form';
import ReviewBlock from './ReviewBlock';

const Step4Review = ({ goToStep }) => {
  const { watch } = useFormContext();

  const data = watch();

  return (
    <>
      <h2>Перевірте дані</h2>

      <ReviewBlock
        title="Особиста інформація"
        onEdit={() => goToStep(0)}
        items={[
          { label: 'Імʼя', value: data.personal?.firstName },
          { label: 'Прізвище', value: data.personal?.lastName },
          { label: 'Email', value: data.personal?.email },
        ]}
      />

      <ReviewBlock
        title="Додаткова інформація"
        onEdit={() => goToStep(2)}
        items={[
          { label: 'Телефон', value: data.additional?.phone },
          { label: 'Стать', value: data.additional?.gender },
          { label: 'Про себе', value: data.additional?.bio },
        ]}
      />
    </>
  );
};

export default Step4Review;