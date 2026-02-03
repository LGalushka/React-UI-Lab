import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Header from './components/layout/Header/Header';
//import Footer from "./components/layout/Footer/Footer";
import FeedbackForm from "./pages/FeedbackRorm/FeedbackRorm";
import SandboxPage from './pages/SandboxPage/SandboxPages';
import { MainLayout } from "./components/layout/MainLayout/MainLayout";


function App() {
  return (
  <BrowserRouter>
    
    {/** Основная рабочая область */}
    <MainLayout>
      {/** Здесь происходит магия переключения */}
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/sandbox" element={<SandboxPage />} />
      </Routes>
    </MainLayout>

  </BrowserRouter>
  );
};

export default App;