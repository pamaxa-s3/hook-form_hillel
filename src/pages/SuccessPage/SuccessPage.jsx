import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <div className="registration-container">
      <h1>Реєстрація успішна</h1>
      <p>Ваш акаунт створено. Дякуємо за реєстрацію.</p>

      <Link to="/">
        <button>На головну</button>
      </Link>
    </div>
  );
};

export default SuccessPage;
