import type React from "react";
import styles from './MainLayout.module.css'
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.mainContainer}>
        <Header />
        <main className={styles.content}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};