import React from "react";
import { StatCard } from "../../components/ui/StatCard/StatCard";
import styles from './SandboxPage.module.css';
import { Users, Activity, AlertTriangle } from "lucide-react";

const SandboxPages: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Панель управления</h1>

      <div className={styles.grid}>
        <StatCard
        label="Всего пользователей"
        value='1,284'
        variant="primary"
        icon={Users}
        trend={{ value: 12, isPositive: true }}
        />
        <StatCard
        label="Активные сессии"
        value='432'
        variant="success"
        icon={Activity}
        trend={{ value: 5, isPositive: true }}
        />
        <StatCard
        label="Ошибки системы"
        value='12'
        variant='danger'
        icon={AlertTriangle}
        trend={{ value: 2, isPositive: false }}
        />
      </div>
    </div>
  );
};

export default SandboxPages;