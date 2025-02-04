import cn from 'clsx';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';

import { TOKEN } from '../../../app.constants';
import styles from '../Hamburger.module.scss';
import { menu } from '../menu.data';

export default function Menu({ isShow, setIsShow }) {
	const { setIsAuth } = useAuth();
	const navigate = useNavigate();

	const handlerLogout = () => {
		Cookies.remove(TOKEN);
		setIsShow(false);
		setIsAuth(false);
		navigate('/auth');
	};

	return (
		<nav className={cn(styles.menu, { [styles.show]: isShow })}>
			<ul>
				{menu.map((item, idx) => (
					<li key={`_menu_${idx}`}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
				<li>
					<button onClick={handlerLogout}>Logout</button>
				</li>
			</ul>
		</nav>
	);
}
