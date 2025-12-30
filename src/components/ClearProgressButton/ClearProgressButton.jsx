const ClearProgressButton = () => (
  <button
    type="button"
    onClick={() => {
      localStorage.clear();
      location.reload();
    }}
  >
    Очистити прогрес
  </button>
);

export default ClearProgressButton;