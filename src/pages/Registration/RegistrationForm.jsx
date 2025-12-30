import { useState, useMemo } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ProgressBar from '@comp/ProgressBar'

import {
	step1Schema,
	step2Schema,
	step3Schema,
	step4Schema
} from '@validation';

import {
	Step1Personal,
	Step2Address,
	Step3Additional,
	Step4Review
} from '@pages/Registration/steps';

import cls from './Registration.module.css';

/* ================= DEFAULT VALUES ================= */

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

/* ================= FIELDS BY STEP ================= */

const STEP_FIELDS = {
	1: ['personal'],
	2: ['address'],
	3: ['additional'],
	4: ['agreements']
};

/* ================= FORM ================= */

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
		defaultValues: DEFAULT_VALUES,
		resolver,
		mode: 'onBlur',
		shouldUnregister: false
	});

	const nextStep = async () => {
		const fields = STEP_FIELDS[currentStep];
		const isValid = await methods.trigger(fields);
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
				<ProgressBar currentStep={currentStep} totalSteps={4} />

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
