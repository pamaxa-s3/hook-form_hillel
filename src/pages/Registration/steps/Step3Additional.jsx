import { useFormContext, Controller } from 'react-hook-form';
import { useEffect, useState } from 'react';

export default function Step3Additional({ onBack }) {
  const {
    register,
    control,
    formState: { errors },
    watch,
  } = useFormContext();

  const bio = watch('additional.bio') || '';
  const avatar = watch('additional.avatar');

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!avatar) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(avatar);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [avatar]);

  return (
    <>
      <h2>Додаткова інформація</h2>

      <div>
        <input
          {...register('additional.phone')}
          placeholder="+380XXXXXXXXX"
        />
        <p>{errors?.additional?.phone?.message}</p>
      </div>

      <div>
        <input
          type="date"
          {...register('additional.birthDate')}
        />
        <p>{errors?.additional?.birthDate?.message}</p>
      </div>

      <div>
        <label>
          <input
            type="radio"
            value="male"
            {...register('additional.gender')}
          />
          Чоловіча
        </label>

        <label>
          <input
            type="radio"
            value="female"
            {...register('additional.gender')}
          />
          Жіноча
        </label>

        <label>
          <input
            type="radio"
            value="other"
            {...register('additional.gender')}
          />
          Інше
        </label>

        <p>{errors?.additional?.gender?.message}</p>
      </div>

      <Controller
        name="additional.avatar"
        control={control}
        render={({ field }) => (
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={(e) => field.onChange(e.target.files[0] || null)}
          />
        )}
      />
      <p>{errors?.additional?.avatar?.message}</p>

      {preview && (
        <img
          src={preview}
          alt="avatar preview"
          width={100}
        />
      )}

      <div>
        <textarea
          {...register('additional.bio')}
          maxLength={500}
        />
        <div>{bio.length} / 500</div>
        <p>{errors?.additional?.bio?.message}</p>
      </div>

      <div style={{ display: 'flex', gap: 12 }}>
        <button type="button" onClick={onBack}>
          ← Назад
        </button>
        <button type="submit">
          Далі →
        </button>
      </div>
    </>
  );
}