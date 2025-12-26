import { useFormContext } from 'react-hook-form';
import {FormInput} from '@comp/form';

const Step1Personal = () => {
	const {
		register,
		formState: { errors, isValidating }
	} = useFormContext();

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

			<FormInput
				label="Підтвердження пароля"
				name="personal.confirmPassword"
				type="password"
				register={register}
				error={errors?.personal?.confirmPassword}
			/>

			<button type="submit">Далі →</button>
		</>
	);
};

export default Step1Personal;
