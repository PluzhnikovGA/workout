import styles from '../Hamburger.module.scss';
import { menu } from "../menu.data";
import cn from 'clsx';

export default function Menu({ isOpen }) {

  const handlerLogout = () => {};
  return (
    <nav className={cn(styles.menu, {[styles.show]: isOpen})}>
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
  )
}
