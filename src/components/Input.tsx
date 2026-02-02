type InputProps = {
  label: string;
  placeholder: string;
  isRequired?: boolean;
}

const Input = ({ label, placeholder, isRequired=false}: InputProps) => {
  const inputId = label.toLowerCase().replace(/\s+/g, '-')

  return (
  <div style={{ marginBottom: '16px', border: '1px solid #ccc', maxWidth: '300px'}}>
    <label htmlFor={inputId}>
    {label}
    {isRequired && <span style={{ color: 'red', marginLeft: '4px'}}>*</span>}
    </label>
 
    <input 
    id={inputId}
    type="text"
    placeholder={placeholder}
    style={{ 
      display: 'block', 
      marginTop: '8px',
      padding: '8px 12px',
      borderRadius: '6px',
      border: '1px solid #ccc',
      fontSize: '16px',
      width: '100%',
      boxSizing: 'border-box',
      outline: 'none'
    }}
    />
  </div>
  )
}

export default Input;