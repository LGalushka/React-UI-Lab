import Input from "../ui/Input/Input"
import Button from "../ui/Button/Button"

const FILTERS = [
  { id: 'all', label: "Все"},
  { id: 'positive', label: "Положительные"},
  { id: 'negative', label: 'Отрицательные'}
];

interface FilterBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterBar = ({ search, onSearchChange, activeFilter, onFilterChange }: FilterBarProps) => {

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      marginBottom: '20px'
    }}>
      {/** Поиск */}
      <Input 
      value={search}
      onChange={onSearchChange}
      placeholder="Поиск отзывов..."
      />

      {/** Группа кнопок */}
      <div style={{ display: 'flex', gap: '10px'}}>
        {/** Добавляем кнопки циклом автоматически */}
        {FILTERS.map((filter)=> (
          <Button
          key={filter.id}
          variant={ activeFilter === filter.id ? 'primary' : 'secondary' }
          onClick={() => onFilterChange(filter.id)}
          >
            {filter.label}
          </Button>
        ))}
      </div>
    </div>  
  );
};
export default FilterBar;