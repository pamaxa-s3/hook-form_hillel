import { useState } from 'react';
import ErrorMessage from './ErrorMessage';
import './form.css';

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

	return (
		<div className='form-field'>
			<label htmlFor={name}>{label}</label>

			<div style={{ position: 'relative' }}>
				<input
					id={name}
					type={isPassword && showPassword ? 'text' : type}
					{...register(name)}
					className={error ? 'error' : ''}
					{...props}
				/>

				{isPassword && (
					<button
						type="button"
						onClick={() => setShowPassword(v => !v)}
						style={{ position: 'absolute', right: 8, top: 3 }}
					>
						{showPassword ? '🙈' : '👁️'}
					</button>
				)}
			</div>

			{error && <ErrorMessage message={error.message} />}
		</div >
	);
};

export default FormInput;
