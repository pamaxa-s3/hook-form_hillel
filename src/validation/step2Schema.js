import * as yup from 'yup';

export const step2Schema = yup.object({
  address: yup.object({
    country: yup
      .string()
      .required("Країна обовʼязкова"),

    city: yup
      .string()
      .min(2, "Місто має містити мінімум 2 символи")
      .required("Місто обовʼязкове"),

    street: yup
      .string()
      .required("Вулиця обовʼязкова"),

    building: yup
      .string()
      .required("Номер будинку обовʼязковий"),

    apartment: yup
      .string()
      .nullable()
      .transform(v => (v === '' ? null : v)),

    postalCode: yup
      .string()
      .required("Поштовий індекс обовʼязковий")
      .when('country', {
        is: 'UA',
        then: s =>
          s.matches(/^\d{5}$/, "Для України формат: 12345"),
      })
      .when('country', {
        is: 'US',
        then: s =>
          s.matches(
            /^\d{5}(-\d{4})?$/,
            "Для США: 12345 або 12345-6789"
          ),
      }),
  }),
});