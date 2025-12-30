import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {Step1Personal,Step2Address,Step3Additional,Step4Review} from '@pages/Registration/steps';

import Stepper from '@components/Stepper';
import {
	step1Schema,
	step2Schema,
	step3Schema,
	step4Schema
} from '@validation';

const schemas = [step1Schema, step2Schema, step3Schema, step4Schema];
const STORAGE_KEY = 'registration-form';

const defaultData = {
	personal: {},
	address: {},
	additional: {},
	agreements: {}
};

export default function RegistrationForm() {
	const navigate = useNavigate();

	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState(defaultData);

	const goToStep = value => setStep(value);

	const methods = useForm({
		resolver: yupResolver(schemas[step - 1]),
		mode: 'onBlur',
		defaultValues: formData
	});

	const { handleSubmit, reset } = methods;

	useEffect(() => {
		const saved = localStorage.getItem(STORAGE_KEY);
		if (saved) {
			const parsed = JSON.parse(saved);
			setStep(parsed.step);
			setFormData(parsed.data);
			reset(parsed.data);
		}
	}, [reset]);

	const saveProgress = data => {
		localStorage.setItem(
			STORAGE_KEY,
			JSON.stringify({
				step,
				data,
				lastSaved: new Date().toISOString()
			})
		);
	};

	const next = data => {
		const updated = { ...formData, ...data };
		setFormData(updated);
		saveProgress(updated);
		setStep(s => s + 1);
	};

	const back = () => setStep(s => s - 1);

	const finish = data => {
		console.log('REGISTER DATA:', data);
		localStorage.removeItem(STORAGE_KEY);
		navigate('/success');
	};

	return (
		<FormProvider {...methods}>
			<Stepper step={step} />

			<form onSubmit={handleSubmit(step === 4 ? finish : next)}>
				{step === 1 && <Step1Personal onNext={handleSubmit(next)} />}

				{step === 2 && (
					<Step2Address onBack={back} onNext={handleSubmit(next)} />
				)}

				{step === 3 && <Step3Additional onBack={back} />}

				{step === 4 && (
					<Step4Review onBack={back} goToStep={goToStep} />
				)}
			</form>
		</FormProvider>
	);
}
