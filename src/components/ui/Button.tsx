import type React from "react";
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

  const variantStyles: Record<StyleVariant, React.CSSProperties> = {
    primary: { backgroundColor: '#4CAF50' },
    secondary: { backgroundColor: '#6c757d'},
    danger: {backgroundColor: '#dc3545'},
  };

  return (
    <button
    onClick={onClick}
    disabled={disabled}
        style={{
          marginTop: '20px',
          width: '100%',
          padding: '10px',
          ...variantStyles[variant],          
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.6 : 1,
        }}
      >
        {children}
      </button>
  );
};

export default Button;