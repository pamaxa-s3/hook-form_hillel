import * as yup from 'yup';

export const step4Schema = yup.object({
  agreements: yup.object({
    terms: yup
      .boolean()
      .oneOf([true], 'Потрібно прийняти умови'),
    newsletter: yup.boolean(),
  }),
});