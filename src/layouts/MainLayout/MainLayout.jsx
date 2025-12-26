import { Outlet } from 'react-router-dom';
import Header from '@comp/Header';
import Footer from '@comp/Footer';
import cls from './MainLayout.module.css';

const MainLayout = () => {
	return (
		<div className={cls.layout}>
			<Header />

			<main className={cls.main}>
				<Outlet />
			</main>

			<Footer />
		</div>
	);
};

export default MainLayout;