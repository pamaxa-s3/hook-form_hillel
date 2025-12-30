const steps = ['Персональні дані', 'Адреса', 'Додатково', 'Перевірка'];

export default function Stepper({ step }) {
	return (
		<div style={{ display: 'flex', marginBottom: 24 }}>
			{steps.map((label, index) => {
				const current = index + 1;
				const isActive = current === step;
				const isDone = current < step;

				return (
					<div
						key={label}
						style={{
							flex: 1,
							textAlign: 'center',
							position: 'relative'
						}}
					>
						<div
							style={{
								width: 32,
								height: 32,
								margin: '0 auto',
								borderRadius: '50%',
								background: isDone
									? '#16a34a'
									: isActive
									? '#4f46e5'
									: '#e5e7eb',
								color: '#fff',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								fontWeight: 600
							}}
						>
							{isDone ? '✓' : current}
						</div>

						<p style={{ fontSize: 12, marginTop: 8 }}>{label}</p>

						{index < steps.length - 1 && (
							<div
								style={{
									position: 'absolute',
									top: 16,
									right: '-50%',
									width: '100%',
									height: 2,
									background: isDone ? '#16a34a' : '#e5e7eb',
									zIndex: -1
								}}
							/>
						)}
					</div>
				);
			})}
		</div>
	);
}