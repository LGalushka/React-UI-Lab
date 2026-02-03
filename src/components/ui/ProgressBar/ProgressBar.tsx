import styles from './ProgressBar.module.css';

type ProgressBarProps = {
  progress: number;
  label?: string;
};

const ProgressBar = ({ progress, label}: ProgressBarProps) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className={styles.container}>
      {label && <div className={styles.label}>{label}</div>}

      <div className={styles.track}>
        <div
          className={styles.bar}
          style={{ width: `${clampedProgress}%` }}
        >
          {clampedProgress > 10 && `${clampedProgress}%`}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;