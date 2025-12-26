import ErrorMessage from './ErrorMessage';
import cls from './form.module.css';

const FormSelect = ({ label, name, option, register, error }) => {
	return (
		<div className={cls.formField}>
			<label htmlFor={name}>{label}</label>
			<select
				id={name}
				{...register(name)}
				className={error ? `${cls.error}` : ''}
			>
				<option value="">Оберіть...</option>
				{
				  options.map((opt)=>(
				    <option key={opt.value} value={opt.value}>{opt.label}</option>
				    ))
				}
			</select>
			
			{error && <ErrorMessage message={error.message} />}
		</div>
	);
};

export default FormSelect;
