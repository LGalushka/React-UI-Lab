import { useState } from "react"
import FeedbackForm from "./components/FeedbackRorm"
import FilterBar from "./components/FilterBar/FilterBar";

const feedbacks = [
  { id: 1, text: "Все супер!", rating: 5 },
  { id: 2, text: "Плохо", rating: 2 },
];


function App() {
  const [search, setSearch] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const filteredFeedback = feedbacks.filter(item => {
    const matchesSearch = item.text.toLowerCase().includes(search.toLowerCase().trim());

    // Проверка по кнопкам фильтра
    const matchesFilter = 
    activeFilter === 'all' ||
    (activeFilter === 'positive' && item.rating >= 4) ||
    (activeFilter === 'negative' && item.rating < 4);

    return matchesSearch && matchesFilter
  });

  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#8b8b8bff'
      }}>
        <FeedbackForm />
      </div>

      <FilterBar 
      search={search}
      onSearchChange={setSearch}
      activeFilter={activeFilter}
      onFilterChange={setActiveFilter}
      />

      {/**Отрисовка результата */}
      <div style={{ marginTop: '20px'}}>
        {filteredFeedback.map(item => (
          <div key={item.id} style={{ borderBottom: '1px solid #ccc', padding: '10px', color: 'white'}}>
            {item.text} - ⭐️ {item.rating}
          </div>
        ))}
      {filteredFeedback.length === 0 && <p>Ничего не найдено 🤷‍♂️</p>}
      </div>

    </>
  )
}

export default App
