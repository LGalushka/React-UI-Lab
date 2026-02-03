import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Header from './components/layout/Header/Header';
//import Footer from "./components/layout/Footer/Footer";
import FeedbackForm from "./pages/FeedbackRorm/FeedbackRorm";
import SandboxPage from './pages/SandboxPage/SandboxPages';
import { MainLayout } from "./components/layout/MainLayout/MainLayout";


function App() {
  return (
   <BrowserRouter>
   { /** Главный контейнер на весь экран */}
   <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f9fafa'}}>
    
    {/** Основная рабочая область */}
    <MainLayout>
      {/** Здесь происходит магия переключения */}
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/sandbox" element={<SandboxPage />} />
      </Routes>
    </MainLayout>

   </div>
   </BrowserRouter>
  );
};

export default App;