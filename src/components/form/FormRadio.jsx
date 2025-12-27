import ErrorMessage from './ErrorMessage';
import cls from './form.module.css'

const FormRadio = ({ label, name, options, value, onChange, error }) => {
	return (
		<div className={cls.formField}>
			<label>{label}</label>

			{options.map((opt) => (
				<label key={opt.value} style={{ marginRight: 12 }}>
					<input
						type="radio"
						value={opt.value}
						checked={value === opt.value}
						onChange={() => onChange(opt.value)}
					/>
					{opt.label}
				</label>
			))}

			{error && <ErrorMessage message={error.message} />}
		</div>
	);
};

export default FormRadio;
