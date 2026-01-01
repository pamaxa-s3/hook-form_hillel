import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<section className="registration-container">
			<h1>Ласкаво просимо</h1>
			<p>
				Це демонстраційна форма реєстрації з multi-step логікою,
				валідацією та збереженням прогресу.
			</p>

			<Link to="/registration">
				<button>Почати реєстрацію</button>
			</Link>
		</section>
	);
};

export default Home;
