const ReviewBlock = ({ title, items, onEdit }) => {
  return (
    <div className="review-block">
      <h3>{title}</h3>

      <ul>
        {items.map(({ label, value }) => (
          <li key={label}>
            <strong>{label}:</strong> {value || '—'}
          </li>
        ))}
      </ul>

      <button type="button" onClick={onEdit}>
        Редагувати
      </button>
    </div>
  );
};

export default ReviewBlock;