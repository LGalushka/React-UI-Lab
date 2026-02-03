import styles from './Input.module.css';

type InputProps = {
  label?: string;
  placeholder: string;
  isRequired?: boolean;
  value: string;
  onChange: (value: string) => void;
}

const Input = ({ label, placeholder, isRequired=false, value, onChange }: InputProps) => {
  const inputId = label ? label.toLowerCase().replace(/\s+/g, '-') : undefined;

  return (
  <div className={styles.container}>
    {label && (
      <label htmlFor={inputId} className={styles.label}>
        {label}
        {isRequired && <span className={styles.required}>*</span>}
      </label>
    )}
    
    <input 
      id={inputId}
      className={styles.inputField}
      type="text"        
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}   
    />
  </div>
  )
}

export default Input;