import ErrorMessage from './ErrorMessage';
import './form.css';

const FormSelect = ({ label, name, options, register, error }) => {
	return (
		<div className='form-field'>
			<label htmlFor={name}>{label}</label>
			<select
				id={name}
				{...register(name)}
				className={error ? 'error' : ''}
			>
				<option value="">Оберіть...</option>
				{
					options.map((opt) => (
						<option key={opt.value} value={opt.value}>{opt.label}</option>
					))
				}
			</select>

			{error && <ErrorMessage message={error.message} />}
		</div>
	);
};

export default FormSelect;
