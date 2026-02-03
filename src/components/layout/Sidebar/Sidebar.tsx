import { NavLink } from "react-router-dom";
import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        LAB<span>BOX</span>
      </div>
      <nav className={styles.nav}>
        <NavLink
        to='/'
        className={( { isActive }) => isActive ? styles.activeLink : styles.link}>
          📝 Фидбек
        </NavLink>
        <NavLink
        to="/sandbox"
        className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          🧪 Песочница
        </NavLink>
      </nav>
      <div className={styles.footer}>
        v1.0.2
      </div>
    </aside>
  )
}

export default Sidebar;

