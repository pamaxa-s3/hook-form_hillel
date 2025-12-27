import { useFormContext } from 'react-hook-form';
import FormCheckbox from '@comp/form';

const AgreementsBlock = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <FormCheckbox
        name="agreements.terms"
        label="Я приймаю умови використання"
        register={register}
        error={errors?.agreements?.terms}
      />

      <FormCheckbox
        name="agreements.newsletter"
        label="Хочу отримувати новини"
        register={register}
      />
    </>
  );
};

export default AgreementsBlock;