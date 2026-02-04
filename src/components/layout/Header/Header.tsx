import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { Bell, Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : styles.link}>Дом</NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? styles.active : styles.link}>О нас</NavLink>
        <NavLink to='/contacts' className={({ isActive }) => isActive ? styles.active : styles.link}>Контакты</NavLink>
      </nav>

      <div className={styles.actions}>
        <div className={styles.searchBox}>
          <Search size={18}/>
          <input type="text" placeholder='Поиск...' spellCheck='false' />
        </div>
        <Bell size={20} className={styles.icon} />
        <div className={styles.userCircle}>
          <User size={20} />
        </div>
      </div>      
    </header>
  );
};

export default Header;