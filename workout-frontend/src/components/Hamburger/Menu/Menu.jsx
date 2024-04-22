import cn from 'clsx';

import styles from '../Hamburger.module.scss';
import { menu } from '../menu.data';

export default function Menu({ isShow }) {
	const handlerLogout = () => {};
	return (
		<nav className={cn(styles.menu, { [styles.show]: isShow })}>
			<ul>
				{menu.map((item, idx) => (
					<li key={`_menu_${idx}`}>
						{item.title}
						{/* <Link to={item.link}>{item.title}</Link> */}
					</li>
				))}
				<li>
					<button onClick={handlerLogout}>Logout</button>
				</li>
			</ul>
		</nav>
	);
}
