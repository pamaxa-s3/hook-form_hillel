import ErrorMessage from './ErrorMessage';
import './form.css';

const FormCheckbox = ({ label, name, register, error }) => {
	return (
		<div className='form-field' >
			<label>
				<input type="checkbox" {...register(name)} /> {label}
			</label>

			{error && <ErrorMessage message={error.message} />}
		</div >
	);
};

export default FormCheckbox;
