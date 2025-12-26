const ErrorMessage = ({ message }) => {
	return <>{message.length && <div>{message}</div>}</>;
};

export default ErrorMessage