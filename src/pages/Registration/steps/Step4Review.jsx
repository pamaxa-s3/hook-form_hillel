import { useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import FormCheckbox from '@components/form/FormCheckbox';

const genderMap = {
	male: 'Чоловіча',
	female: 'Жіноча',
	other: 'Інше',
};

const Step4Review = ({ onBack, goToStep }) => {
	const {
		watch,
		register,
		formState: { errors },
	} = useFormContext();

	const data = watch();

	const personal = data?.personal || {};
	const address = data?.address || {};
	const additional = data?.additional || {};

	const avatarUrl = useMemo(() => {
		if (!additional.avatar) return null;
		return URL.createObjectURL(additional.avatar);
	}, [additional.avatar]);

	useEffect(() => {
		return () => {
			if (avatarUrl) URL.revokeObjectURL(avatarUrl);
		};
	}, [avatarUrl]);

	return (
		<>
			<h2>Перевірка даних</h2>

			{/* ===== Особиста інформація ===== */}
			<section>
				<h3>
					Особиста інформація
					<button type="button" onClick={() => goToStep(1)}>
						Редагувати
					</button>
				</h3>

				<p>{personal.firstName} {personal.lastName}</p>
				<p>{personal.email}</p>
				<p>••••••••</p>
			</section>

			{/* ===== Адреса ===== */}
			<section>
				<h3>
					Адреса
					<button type="button" onClick={() => goToStep(2)}>
						Редагувати
					</button>
				</h3>

				<p>{address.country}</p>
				<p>
					{address.city}, {address.street} {address.building}
				</p>
				{address.apartment && <p>Кв. {address.apartment}</p>}
				<p>{address.postalCode}</p>
			</section>

			{/* ===== Додаткова інформація ===== */}
			<section>
				<h3>
					Додаткова інформація
					<button type="button" onClick={() => goToStep(3)}>
						Редагувати
					</button>
				</h3>

				<p>{additional.phone}</p>
				<p>{genderMap[additional.gender]}</p>

				{avatarUrl && (
					<img
						src={avatarUrl}
						alt="avatar"
						width={80}
					/>
				)}
			</section>

			{/* ===== Agreements ===== */}
			<FormCheckbox
				name="agreements.terms"
				label="Я приймаю умови використання"
				register={register}
				error={errors?.agreements?.terms}
			/>

			<FormCheckbox
				name="agreements.newsletter"
				label="Отримувати новини"
				register={register}
			/>

			<div style={{ display: 'flex', gap: 12 }}>
				<button type="button" onClick={onBack}>
					← Назад
				</button>
				<button type="submit">
					Зареєструватись
				</button>
			</div>
		</>
	);
};

export default Step4Review;