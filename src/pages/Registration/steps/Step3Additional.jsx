import { Controller, useFormContext } from 'react-hook-form';
import {
	FormInput,
	FormRadio,
	FormTextarea,
	FormFileUpload
} from '@comp/form';

import cls from './steps.module.css';

const Step3Additional = ({ onNext, onBack }) => {
	const {
		register,
		control,
		formState: { errors }
	} = useFormContext();

	return (
		<>
			<h2>Додаткова інформація</h2>

			<FormInput
				label="Телефон"
				name="additional.phone"
				register={register}
				error={errors?.additional?.phone}
				placeholder="+380XXXXXXXXX"
			/>

			<FormInput
				label="Дата народження"
				name="additional.birthDate"
				type="date"
				register={register}
				error={errors?.additional?.birthDate}
			/>

			<Controller
				name="additional.gender"
				control={control}
				render={({ field }) => (
					<FormRadio
						label="Стать"
						options={[
							{ value: 'male', label: 'Чоловіча' },
							{ value: 'female', label: 'Жіноча' },
							{ value: 'other', label: 'Інше' }
						]}
						error={errors?.additional?.gender}
						{...field}
					/>
				)}
			/>

			<FormFileUpload
				label="Аватар"
				name="additional.avatar"
				control={control}
				error={errors?.additional?.avatar}
			/>

			<Controller
				name="additional.bio"
				control={control}
				render={({ field }) => (
					<FormTextarea
						label="Про себе"
						maxLength={500}
						error={errors?.additional?.bio}
						{...field}
					/>
				)}
			/>

			<div className={cls.formButtons}>
				<button type="button" onClick={onBack}>
					← Назад
				</button>

				<button type="button" onClick={onNext}>
					Далі →
				</button>
			</div>
		</>
	);
};

export default Step3Additional;