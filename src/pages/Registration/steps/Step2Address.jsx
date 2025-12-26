import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormInput, FormSelect } from '@comp/form';
import { countries } from '@/utils/countries';

const Step2Address = ({ onBack }) => {
	const {
		register,
		watch,
		setValue,
		formState: { errors }
	} = useFormContext();

	const country = watch('address.country');

	useEffect(() => {
		setValue('address.postalCode', '');
	}, [country, setValue]);

	return (
		<>
			<h2>Адреса</h2>

			<FormSelect
				label="Країна"
				name="address.country"
				options={countries}
				register={register}
				error={errors?.address?.country}
			/>

			<FormInput
				label="Місто"
				name="address.city"
				register={register}
				error={errors?.address?.city}
			/>

			<FormInput
				label="Вулиця"
				name="address.street"
				register={register}
				error={errors?.address?.street}
			/>

			<FormInput
				label="Номер будинку"
				name="address.building"
				register={register}
				error={errors?.address?.building}
			/>

			<FormInput
				label="Квартира"
				name="address.apartment"
				type="number"
				register={register}
				error={errors?.address?.apartment}
			/>

			<FormInput
				label="Поштовий індекс"
				name="address.postalCode"
				register={register}
				error={errors?.address?.postalCode}
				placeholder={
					country === 'UA' ? '12345' : '12345 або 12345-6789'
				}
			/>
<div className={cls.formButtons}>
			<button type="button" onClick={onBack}>← Назад</button>
			<button type="submit">Далі →</button>
</div>
		</>
	);
};

export default Step2Address;
