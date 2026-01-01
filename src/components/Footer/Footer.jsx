const Footer = () => {
	return (
		<footer style={{ padding: 16, textAlign: 'center', color: '#6b7280' }}>
			© {new Date().getFullYear()} Розробив <span style={{ color: '#707002' }}>Роман Стринжа</span>
		</footer>
	);
};

export default Footer;
