import ErrorMessage from './ErrorMessage';
import './form.css'

const FormRadio = ({ label, name, options, value, onChange, error }) => {
	return (
		<div className='form-field'>
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
