import { useState, useMemo } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
	step1Schema,
	step2Schema,
	step3Schema,
	step4Schema
} from '@validation';

import Step1Personal from './steps/Step1Personal';
import Step2Address from './steps/Step2Address';
import Step3Additional from './steps/Step3Additional';
import Step4Review from './steps/Step4Review';

import cls from './RegistrationForm.module.css';

const DEFAULT_VALUES = {
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
		terms: false,
		newsletter: false
	}
};

const RegistrationForm = () => {
	const [currentStep, setCurrentStep] = useState(1);

	const resolver = useMemo(() => {
		switch (currentStep) {
			case 1:
				return yupResolver(step1Schema);
			case 2:
				return yupResolver(step2Schema);
			case 3:
				return yupResolver(step3Schema);
			case 4:
				return yupResolver(step4Schema);
			default:
				return yupResolver(step1Schema);
		}
	}, [currentStep]);

	const methods = useForm({
		resolver,
		defaultValues: DEFAULT_VALUES,
		mode: 'onBlur',
		shouldUnregister: false
	});

	const nextStep = async () => {
		const isValid = await methods.trigger();
		if (!isValid) return;
		setCurrentStep(prev => prev + 1);
	};

	const prevStep = () => {
		setCurrentStep(prev => prev - 1);
	};

	const onSubmit = async data => {
		console.log('FINAL DATA:', data);

		await new Promise(res => setTimeout(res, 1000));

		alert('Реєстрація успішна');
		methods.reset();
		setCurrentStep(1);
	};

	return (
		<FormProvider {...methods}>
			<form
				className={cls.form}
				onSubmit={methods.handleSubmit(onSubmit)}
			>
				{currentStep === 1 && <Step1Personal onNext={nextStep} />}
				{currentStep === 2 && (
					<Step2Address onNext={nextStep} onBack={prevStep} />
				)}
				{currentStep === 3 && (
					<Step3Additional onNext={nextStep} onBack={prevStep} />
				)}
				{currentStep === 4 && <Step4Review goToStep={setCurrentStep} />}
			</form>
		</FormProvider>
	);
};

export default RegistrationForm;
