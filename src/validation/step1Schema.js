import * as yup from 'yup';
import {nameRegex, passwordRegex} from '@utils/constants'

export const step1Schema = yup.object({
  personal: yup.object({
    firstName: yup
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
        return !['test@example.com', 'admin@example.com'].includes(value);
      }),

    password: yup
      .string()
      .required("Пароль обов'язковий")
      .matches(passwordRegex, 'Слабкий пароль'),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Паролі не співпадають')
      .required("Підтвердження обовʼязкове"),
  }),
});