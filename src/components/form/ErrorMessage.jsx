// import cls from './form.module .css'

const ErrorMessage = ({ message }) => {
  if (!message) return null;
  return <div className='error-message'>{message}</div>;
};

export default ErrorMessage