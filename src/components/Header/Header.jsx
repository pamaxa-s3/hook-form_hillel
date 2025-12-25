import {NavLink} from 'react-router-dom'
import Navigation from '@comp/Navigation';
import cls from './Header.module.css';

const Header = () => {
	return (
		<header className={cls.header}>
			<div className={cls.logo}>
			<NavLink to='/'>LoGo</NavLink>
			</div>
			<div className={cls.navigation}>
				<Navigation />
			</div>
		</header>
	);
};

export default Header;
