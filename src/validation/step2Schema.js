import * as yup from 'yup';

export const step2Schema = yup.object({
  address: yup.object({
    country: yup
      .string()
      .required('Країна обовʼязкова'),

    city: yup
      .string()
      .required('Місто обовʼязкове')
      .min(2, 'Мінімум 2 символи'),

    street: yup
      .string()
      .required('Вулиця обовʼязкова')
      .min(2, 'Мінімум 2 символи'),

    building: yup
      .string()
      .required('Номер будинку обовʼязковий'),

    apartment: yup
      .number()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === '' ? null : value
      ),

    postalCode: yup
      .string()
      .required('Поштовий індекс обовʼязковий')
      .when('country', {
        is: 'UA',
        then: (schema) =>
          schema.matches(/^\d{5}$/, 'Формат: 12345'),
        otherwise: (schema) =>
          schema.matches(
            /^\d{5}(-\d{4})?$/,
            'Формат: 12345 або 12345-6789'
          ),
      }),
  }),
});