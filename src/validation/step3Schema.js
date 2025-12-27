import * as yup from 'yup';
import { isAdult } from '@help/dateUtils'

export const step3Schema = yup.object({
	additional: yup.object({
		phone: yup
			.string()
			.required('Телефон обовʼязковий')
			.matches(
				/^\+380\d{9}$/,
				'Формат: +380XXXXXXXXX'
			),

		birthDate: yup
			.date()
			.typeError('Невірна дата')
			.required('Дата народження обовʼязкова')
			.test(
				'age',
				'Вік має бути від 18 до 100 років',
				(value) => {
					if (!value) return false;
					const age = isAdult(value);
					return age >= 18 && age <= 100;
				}
			),

		gender: yup
			.string()
			.required('Оберіть стать')
			.oneOf(['male', 'female', 'other']),

		avatar: yup
			.mixed()
			.nullable()
			.test(
				'fileSize',
				'Максимальний розмір 2MB',
				(file) =>
					!file || file.size <= 2 * 1024 * 1024
			)
			.test(
				'fileType',
				'Дозволені JPG, PNG, WebP',
				(file) =>
					!file ||
					['image/jpeg', 'image/png', 'image/webp'].includes(
						file.type
					)
			),

		bio: yup
			.string()
			.max(500, 'Максимум 500 символів'),
	}),
});
