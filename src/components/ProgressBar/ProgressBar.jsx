export default function ProgressBar({ step, total }) {
  const percent = (step / total) * 100;

  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ height: 8, background: '#e5e7eb', borderRadius: 4 }}>
        <div
          style={{
            width: `${percent}%`,
            height: '100%',
            background: '#4f46e5',
            borderRadius: 4,
            transition: 'width 0.3s'
          }}
        />
      </div>
      <p>Крок {step} з {total}</p>
    </div>
  );
}