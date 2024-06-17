import cn from 'clsx';
import { Link } from 'react-router-dom';

import styles from '../Hamburger.module.scss';
import { menu } from '../menu.data';

export default function Menu({ isShow }) {
	const handlerLogout = () => {};
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
