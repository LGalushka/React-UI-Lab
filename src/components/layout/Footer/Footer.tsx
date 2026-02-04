import { GitBranchIcon, Globe, MailIcon } from 'lucide-react';
import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brandSection}>
          <h3 className={styles.logo}>LAB<span>BOX</span></h3>
          <p className={styles.description}>
            Современная среда для тестирования и разработки интерфейсов.
          </p>
        </div>

        <div className={styles.linkSection}>
          <div className={styles.column}>
            <h4>Продукт</h4>
              <a href="#">Компоненты</a>
              <a href="#">Документация</a>
          </div>
          <div className={styles.column}>
            <h4>Компания</h4>
            <a href="#">О нас</a>
            <a href="#">Контакты</a>
          </div>
        </div>

        <div className={styles.socials}>
          <GitBranchIcon size={20} className={styles.icon} />
          <Globe size={20} className={styles.icon} />
          <MailIcon size={20} className={styles.icon} />
        </div>
      </div>

      <div className={styles.copyright}>
        <p>&copy; {currentYear} LABBOX. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;