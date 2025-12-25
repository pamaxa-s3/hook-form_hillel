import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
	step1Schema,
	step2Schema,
	step3Schema,
	step4Schema
} from '@validation';

import cls from './RegistrationForm.module.css';

const RegistrationForm = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState({
		personal: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: ''
		},
		address: {
			country: '',
			city: '',
			street: '',
			building: '',
			apartment: '',
			postalCode: ''
		},
		additional: {
			phone: '',
			birthDate: '',
			gender: '',
			avatar: null,
			bio: ''
		},
		agreements: {
			acceptTerms: false,
			subscribeNewsletter: false
		}
	});

	const getStepSchema = step => {
		switch (step) {
			case 1:
				return step1Schema;
			case 2:
				return step2Schema;
			case 3:
				return step3Schema;
			case 4:
				return step4Schema;
			default:
				return step1Schema;
		}
	};

	const method = useForm({
		resolver: yupResolver(getStepSchema(currentStep)),
		defaultValues: formData,
		mode: 'onBlur'
	});

	const handleNext = data => {
		setFormData(prev => ({
			...prev,
			...data
		}));
		setCurrentStep(prev => prev + 1);
	};
	
	const handleBack = ()=>{
	  setCurrentStep(prev=>prev-1)
	}

	const handleSubmitForm = () => {};

	return <form></form>;
};

export default RegistrationForm;
