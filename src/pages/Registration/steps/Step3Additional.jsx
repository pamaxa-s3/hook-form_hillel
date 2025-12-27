import { Controller, useFormContext } from 'react-hook-form';
import FormInput from '@/comp/form/FormInput';
import FormRadio from '@/comp/form/FormRadio';
import FormTextarea from '@/comp/form/FormTextarea';
import FormFileUpload from '@/comp/form/FormFileUpload';
import cls from './steps.module.css'

const Step3Additional = ({ onBack }) => {
	const {
		register,
		control,
		formState: { errors },
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
						{...field}
						options={[
							{ value: 'male', label: 'Чоловіча' },
							{ value: 'female', label: 'Жіноча' },
							{ value: 'other', label: 'Інше' },
						]}
						error={errors?.additional?.gender}
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
						{...field}
						error={errors?.additional?.bio}
					/>
				)}
			/>

			<div className={cls.formButtons}>
				<button type="button" onClick={onBack}>
					← Назад
				</button>
				<button type="submit">Далі →</button>
			</div>
		</>
	);
};

export default Step3Additional;
