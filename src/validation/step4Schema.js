import * as yup from 'yup';

export const step4Schema = yup.object({
	agreements: yup.object({
		terms: yup
			.boolean()
			.oneOf([true], 'Ви повинні прийняти умови користування')
			.required(),

		newsletter: yup
			.boolean()
			.default(false),
	}),
});