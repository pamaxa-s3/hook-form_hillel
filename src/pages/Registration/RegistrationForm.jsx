import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Stepper from '@components/Stepper';
import { Step1Personal, Step2Address, Step3Additional, Step4Review } from '@pages/Registration/steps';

import {
	step1Schema,
	step2Schema,
	step3Schema,
	step4Schema
} from '@validation';

import cls from './Registration.module.css';
import { useNavigate } from 'react-router-dom';


const RegistrationForm = () => {
	const schemas = [step1Schema, step2Schema, step3Schema, step4Schema];
	const [step, setStep] = useState(1);
	const navigate = useNavigate();

	const methods = useForm({
		resolver: yupResolver(schemas[step - 1]),
		mode: 'onTouched',
		shouldUnregister: false,
	});

	const next = async () => {
		const fieldsByStep = {
			1: ['personal'],
			2: ['address'],
			3: ['additional'],
		};

		const valid = await methods.trigger(fieldsByStep[step]);
		if (!valid) return;

		setStep(prev => prev + 1);
	};

	const back = () => setStep(prev => prev - 1);

	const submit = data => {
		console.log('FINAL DATA', data);
		navigate('/success')
	};

	return (
		<FormProvider {...methods}>
			<form
				className={cls.form}
				onSubmit={(e) => e.preventDefault()}
				noValidate
			>

				<Stepper
					step={step}
					onStepClick={(target) => {
						if (target < step) setStep(target);
					}}
				/>

				{step === 1 && <Step1Personal onNext={next} />}
				{step === 2 && <Step2Address onNext={next} onBack={back} />}
				{step === 3 && <Step3Additional onNext={next} onBack={back} />}
				{step === 4 && (
					<Step4Review
						onBack={back}
						onSubmit={methods.handleSubmit(submit)}
						goToStep={setStep}
					/>
				)}

			</form>
		</FormProvider>
	);
};

export default RegistrationForm;
