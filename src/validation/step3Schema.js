import * as yup from 'yup';

const getAge = (value) => {
  if (!value) return 0;

  const today = new Date();
  const birth = new Date(value);

  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
};

export const step3Schema = yup.object({
  additional: yup.object({
    phone: yup
      .string()
      .required('Номер телефону обовʼязковий')
      .matches(/^\+380\d{9}$/, 'Формат: +380XXXXXXXXX'),

    birthDate: yup
      .string()
      .required('Дата народження обовʼязкова')
      .test(
        'age-range',
        'Вік має бути від 18 до 100 років',
        value => {
          const age = getAge(value);
          return age >= 18 && age <= 100;
        }
      ),

    gender: yup
      .string()
      .required('Оберіть стать'),

    avatar: yup
      .mixed()
      .nullable()
      .test(
        'fileSize',
        'Максимальний розмір файлу — 2MB',
        file => !file || file.size <= 2 * 1024 * 1024
      )
      .test(
        'fileType',
        'Дозволені формати: JPG, PNG, WebP',
        file =>
          !file ||
          ['image/jpeg', 'image/png', 'image/webp'].includes(file.type)
      ),

    bio: yup
      .string()
      .max(500, 'Максимум 500 символів'),
  }),
});