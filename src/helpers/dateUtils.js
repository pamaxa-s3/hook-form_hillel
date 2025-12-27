export const getAge = (date) => {
	const today = new Date();
	const birth = new Date(date);

	let age = today.getFullYear() - birth.getFullYear();
	const m = today.getMonth() - birth.getMonth();

	if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
		age--;
	}

	return age;
};
