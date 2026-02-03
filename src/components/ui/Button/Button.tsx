import type React from "react";
import styles from './Buttom.module.css';

type StyleVariant = 'primary' | 'secondary' | 'danger'

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: StyleVariant;
}

const Button = ({ 
  children,
  onClick,  
  disabled=false,
  variant = 'primary'
}: ButtonProps) => {

const buttonClassName = `${styles.button} ${styles[variant]}`;

  

  return (
    <button
    onClick={onClick}
    disabled={disabled}
    className={buttonClassName}        
    >
      {children}
    </button>
  );
};

export default Button;