type ProgressBarProps = {
  progress: number;
  label?: string;
};

const ProgressBar = ({ progress, label}: ProgressBarProps) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div style={{ marginTop: '15px', width: '400px', fontFamily: 'sans-serif'}}>
    {label && <div style={{marginBottom: '8px', fontSize: '18px'}}>{label}</div>}
    <div style={{
      backgroundColor: "#EEE",
      borderRadius: '8px', 
      overflow: 'hidden',
      height: '30px',
      position: 'relative'      
    }}>
      <div style={{
        backgroundColor: '#4CAF50',
        width: `${clampedProgress}%`,
        height: '100%',
        transition: 'width 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '14px',
        fontWeight: 'bold',
        textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
      }}>
        {clampedProgress > 10 && `${clampedProgress}%`}
      </div>      
    </div>
    </div>
  )
}

export default ProgressBar;