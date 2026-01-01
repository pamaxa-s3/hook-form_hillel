import { useFormContext } from 'react-hook-form';
import { FormInput } from '@components/form';

const isWeakPassword = password => {
  if (!password) return false;
  return !(
    /[A-Z]/.test(password) &&
    /\d/.test(password) &&
    /[!@#$%^&*]/.test(password)
  );
};

const Step1Personal = ({ onNext }) => {
  const {
    register,
    watch,
    formState: { errors, isValidating },
  } = useFormContext();

  const password = watch('personal.password');
  const weakPassword = isWeakPassword(password);

  return (
    <>
      <h2>Особиста інформація</h2>

      <FormInput
        label="Ім'я"
        name="personal.firstName"
        register={register}
        error={errors?.personal?.firstName}
      />

      <FormInput
        label="Прізвище"
        name="personal.lastName"
        register={register}
        error={errors?.personal?.lastName}
      />

      <FormInput
        label="Email"
        name="personal.email"
        register={register}
        error={errors?.personal?.email}
      />

      {isValidating && <p>Перевірка email...</p>}

      <FormInput
        label="Пароль"
        name="personal.password"
        type="password"
        register={register}
        error={errors?.personal?.password}
      />

      {weakPassword && !errors?.personal?.password && (
        <p style={{ color: 'orange', fontSize: 14 }}>
          Пароль слабкий. Додайте велику літеру, цифру та спецсимвол
        </p>
      )}

      <FormInput
        label="Підтвердження пароля"
        name="personal.confirmPassword"
        type="password"
        register={register}
        error={errors?.personal?.confirmPassword}
      />

      <button type="button" onClick={onNext}>
        Далі →
      </button>
    </>
  );
};

export default Step1Personal;
