import { NavLink } from 'react-router-dom';
import cls from './Navigation.module.css';

const Navigation = () => {
	return (
		<nav className={cls.navigation}>
			<NavLink
				to="/"
				className={({ isActive }) => (isActive ? `${cls.active}` : '')}
			>
				Home
			</NavLink>
			<NavLink to="/registration" className={({ isActive }) => (isActive ? `${cls.active}` : '')}>Registration</NavLink>
		
		</nav>
	);
};
export default Navigation;
