import ErrorMessage from './ErrorMessage';
import cls from './form.module.css';

const FormCheckbox = ({ label, name, register, error }) => {
	return (
		<div className={cls.formField}>
			<label>
				<input type="checkbox" {...register(name)} /> {label}
			</label>

			{error && <ErrorMessage message={error.message} />}
		</div>
	);
};

export default FormCheckbox;
