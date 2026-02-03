import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Footer from "./components/layout/Footer";
import FeedbackForm from "./pages/FeedbackRorm";
import SandboxPage from './pages/SandboxPages';


function App() {
  return (
   <BrowserRouter>
   { /** Главный контейнер на весь экран */}
   <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f9fafa'}}>
    
    { /** Боковая панель (всегда на месте) */}
    <Sidebar />

    {/** Основная рабочая область */}
    <main style={{
      flex: 1,
      padding: '20px',
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/** Здесь происходит магия переключения */}
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/sandbox" element={<SandboxPage />} />
      </Routes>
    </main>

   </div>
   </BrowserRouter>
  );
};

export default App;