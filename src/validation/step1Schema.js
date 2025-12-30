import * as yup from 'yup';

export const step1Schema = yup.object({
  personal: yup.object({
    firstName: yup
      .string()
      .min(2, "Мінімум 2 символи")
      .matches(/^[A-Za-zА-Яа-яІіЇїЄє\s]+$/, "Тільки літери та пробіли")
      .required("Імʼя обовʼязкове"),

    lastName: yup
      .string()
      .min(2, "Мінімум 2 символи")
      .matches(/^[A-Za-zА-Яа-яІіЇїЄє\s]+$/, "Тільки літери та пробіли")
      .required("Прізвище обовʼязкове"),

    email: yup
      .string()
      .email("Невалідний email")
      .required("Email обовʼязковий")
      .test(
        'unique',
        'Email вже зайнятий',
        async value => {
          await new Promise(r => setTimeout(r, 500));
          return !['test@example.com', 'admin@example.com'].includes(value);
        }
      ),

    password: yup
      .string()
      .min(8, "Пароль має містити мінімум 8 символів")
      .required("Пароль обовʼязковий"),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], "Паролі не співпадають")
      .required("Підтвердіть пароль")
  })
});