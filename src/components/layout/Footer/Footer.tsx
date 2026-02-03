import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2026 LABBOX. All rights reserved.</p>
      <div className={styles.links}>
        <a href='#'>Документация</a>
        <a href="#">Поддержка</a>
      </div>
    </footer>
  );
};

export default Footer;