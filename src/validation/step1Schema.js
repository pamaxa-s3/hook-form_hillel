import * as yup from 'yup';
import { nameRegex, passwordRegex } from '@utils/constans';

export const step1Schema = yup.object({
	firsName: yup
		.string()
		.required("Ім'я обов'язкове")
		.min(2, 'Мінімум 2 символи')
		.matches(nameRegex, 'Тільки літери'),

	lastName: yup
		.string()
		.required("Прізвище обов'язкове")
		.min(2, 'Мінімум 2 символи')
		.matches(nameRegex, 'Тільки літери'),

	email: yup
		.string()
		.required("Email обов'язкове")
		.email('Невірний формат email')
		.test('email-unique', 'Email вже зареєстрований', async value => {
			if (!value) return true;

			return new Promise(resolve => {
				setTimeout(() => {
					const taken = ['test@example.com', 'admin@example.com'];
					resolve(!taken.includes(value));
				}, 500);
			});
		}),
	password: yup
		.string()
		.required("Пароль обов'язковий")
		.matches(
			passwordRegex,
			'Пароль має містити велику літеру, цифру та спецсимвол'
		),
	confirmPassword: yup
		.string()
		.required("Підтвердження обов'язкове")
		.oneOf([yup.ref('password')], 'Паролі не співпадають')
});
