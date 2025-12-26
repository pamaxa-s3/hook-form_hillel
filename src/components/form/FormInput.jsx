import { useState } from 'react';
import ErrorMessage from './ErrorMessage';
import cls from './form.module.css';

const FormInput = ({
	label,
	name,
	type = 'text',
	register,
	error,
	...props
}) => {
	const [showPassword, setShowPassword] = useState(false);
	const isPassword = type === 'password';

	function handleShowPassword() {
		setShowPassword(v => !v);
	}

	return (
		<div className={cls.formField}>
			<label htmlFor={name}>{label}</label>
			<div style={{ position: 'relative' }}>
				<input
					id={name}
					type={isPassword && setShowPassword ? 'text' : type}
					{...register(name)}
					className={error ? `${cls.error}` : ''}
					{...props}
				/>
				{isPassword && (
					<button
						type="button"
						onClick={handleShowPassword}
						style={{ position: 'absolute', right: 8, top: 8 }}
					>
						{showPassword ? '🙈' : '👁️'}
					</button>
				)}
			</div>
			
			{error && <ErrorMessage message={error.message} />}
		</div>
	);
};

export default FormInput;
