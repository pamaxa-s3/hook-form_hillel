import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <div
      style={{
        maxWidth: 500,
        margin: '80px auto',
        padding: 24,
        textAlign: 'center',
        border: '1px solid #e5e7eb',
        borderRadius: 8
      }}
    >
      <h1>Реєстрація успішна 🎉</h1>

      <p style={{ marginTop: 12 }}>
        Ваш акаунт було створено. Дякуємо за реєстрацію.
      </p>

      <div style={{ marginTop: 32 }}>
        <Link to="/">
          <button>Перейти на головну</button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;