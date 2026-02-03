const iconsData = {
    home: '🏠',
    search: '🔍',
    user: '👤',
    settings: '⚙️',
  } as const;

  type IconName = keyof typeof iconsData;

  type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
  }

  const Icon = ({ name, size = 24, color = 'black'}: IconProps) => {
    return (
      <div 
        style={{ color, fontSize: size, display: 'inline-block'}}
        aria-label={`Иконка: ${name}`}
        >
        {iconsData[name]}
      </div>
    )
  }
    

export default Icon;