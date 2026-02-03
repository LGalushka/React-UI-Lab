import type React from "react";
import styles from './StatCard.module.css';



export type ColorVariant = 'primary' | 'success' | 'warning' | 'danger';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: React.ElementType;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: ColorVariant;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value, 
  icon: Icon,
  trend,
  variant = 'primary'
}) => {
  return (
  <div className={`${styles.card} ${styles[variant]}`}>
    <div className={styles.header}>
      <span className={styles.label}>{label}</span>
      <div className={ styles.iconWrapper }>
        <Icon size={20} strokeWidth={2.5} />
      </div>      
    </div>
    <div className={styles.content}>
      <h3 className={styles.value}>{value}</h3>
      {trend && (
        <span className={trend.isPositive ? styles.up : styles.down}>
          {trend.isPositive ? '↗' : '↘'} {trend.value}%
        </span>
      )}
    </div>
  </div>
  );
};

