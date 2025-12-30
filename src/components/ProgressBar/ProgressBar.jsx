import cls from './ProgressBar.module.css';

const ProgressBar = ({ currentStep, totalSteps }) => {
	const progressPercent = ((currentStep - 1) / (totalSteps - 1)) * 100;

	return (
		<div className={cls.wrapper}>
			<div className={cls.track}>
				<div
					className={cls.progress}
					style={{ width: `${progressPercent}%` }}
				/>
			</div>

			<div className={cls.steps}>
				{Array.from({ length: totalSteps }).map((_, index) => {
					const step = index + 1;
					const isActive = step === currentStep;
					const isDone = step < currentStep;

					return (
						<div
							key={step}
							className={[
								cls.step,
								isActive && cls.active,
								isDone && cls.done
							]
								.filter(Boolean)
								.join(' ')}
						>
							{step}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProgressBar;