const steps = ['Персональні дані', 'Адреса', 'Додатково', 'Перевірка'];

const Stepper = ({ step, onStepClick }) => {
	return (
		<div className="stepper">
			{steps.map((label, i) => {
				const current = i + 1;

				const status =
					current < step
						? 'completed'
						: current === step
							? 'current'
							: 'upcoming';

				return (
					<div
						key={label}
						className="step-item"
						onClick={() => current < step && onStepClick(current)}
					>
						<div className={`step-circle ${status}`}>
							{current < step ? '✓' : current}
						</div>
						<span>{label}</span>
					</div>
				);
			})}
		</div>
	);
};

export default Stepper;
