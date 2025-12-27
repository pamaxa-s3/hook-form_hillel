import ErrorMessage from './ErrorMessage';
import cls from './form.module.css'

const FormTextarea = ({
	label,
	name,
	value,
	onChange,
	maxLength,
	error,
}) => {
	return (
		<div className={cls.formField}>
			<label htmlFor={name}>{label}</label>

			<textarea
				id={name}
				value={value || ''}
				onChange={onChange}
				maxLength={maxLength}
			/>

			<div style={{ fontSize: 12, textAlign: 'right' }}>
				{(value?.length || 0)} / {maxLength}
			</div>

			{error && <ErrorMessage message={error.message} />}
		</div>
	);
};

export default FormTextarea;
