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
  <div>
    <label htmlFor={inputId}>
    {label}
    {isRequired && <span style={{ color: 'red', marginLeft: '4px'}}>*</span>}
    </label>
 
    <input 
    id={inputId}
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    style={{ 
          width: '100%', 
          marginTop: '10px',
          marginBottom: '15px', 
          padding: '12px 15px', 
          borderRadius: '10px', 
          border: '1px solid #ddd',
          backgroundColor: '#fff',
          fontSize: '16px',
          boxSizing: 'border-box',
          outline: 'none',
          transition: 'border-color 0.3s, box-shadpw 0.3s',
          boxShadow: '0 2px 4px rgba(0,0,0,0.5)'
          }}
          onFocus={(e) => e.target.style.borderColor = '#4CAF50'}
          onBlur={(e) => e.target.style.borderColor = '#ddd'}
   
    />
  </div>
  )
}

export default Input;