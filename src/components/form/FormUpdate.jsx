import { Controller } from 'react-hook-form';
import { useState, useEffect } from 'react';
import ErrorMessage from './ErrorMessage';
import cls from './form.module.css'

const FormFileUpload = ({ label, name, control, error }) => {
	const [preview, setPreview] = useState(null);

	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { value, onChange } }) => {
				useEffect(() => {
					if (!value) {
						setPreview(null);
						return;
					}

					const reader = new FileReader();
					reader.onloadend = () => setPreview(reader.result);
					reader.readAsDataURL(value);
				}, [value]);

				return (
					<div className="form-field">
						<label>{label}</label>

						<input
							type="file"
							accept="image/*"
							hidden
							id={name}
							onChange={(e) => onChange(e.target.files[0])}
						/>

						<label htmlFor={name} className="btn">
							Вибрати файл
						</label>

						{value && (
							<button type="button" onClick={() => onChange(null)}>
								Видалити
							</button>
						)}

						{preview && (
							<img
								src={preview}
								alt="Preview"
								style={{ maxWidth: 120, marginTop: 8 }}
							/>
						)}

						{error && <ErrorMessage message={error.message} />}
					</div>
				);
			}}
		/>
	);
};

export default FormFileUpload;
