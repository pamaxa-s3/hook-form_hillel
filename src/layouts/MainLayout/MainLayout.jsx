import { Outlet } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@components/Footer';
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