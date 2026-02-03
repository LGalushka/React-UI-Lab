type ToggleProps = {
  label: string;
  isChecked: boolean;
  onChange: () => void;
}

const Toggle = ({ label, isChecked, onChange }: ToggleProps) => {

return (
    <div
      onClick={onChange}
      style={{ 
        cursor: 'pointer', 
        userSelect: 'none',
        color: isChecked ? '#2563eb' : '#4b5563',
        transition: 'color 0.2s ease'
      }}
    >
      <span>{isChecked ? '✅' : '⬜'}</span>
      <span style={{ 
        marginLeft: '8px',
        fontWeight: isChecked ? 'bold' : 'normal'
        }}>
          {label}
          </span>              
    </div>
  )
}

export default Toggle;