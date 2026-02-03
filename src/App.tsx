import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Footer from "./components/layout/Footer";
import FeedbackForm from "./pages/FeedbackRorm";
import SandboxPage from './pages/SandboxPages';


function App() {
  return (
    <BrowserRouter>
    <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header />

      <div style={{ display: 'flex', flex: 1}}>
        <Sidebar />

        <main style={{ flex: 1, padding: '20px', backgroundColor: '#f5f5f5'}}>
          {/** Здесь будет менять контент в зависисоти от пути */}
          <Routes>
            <Route path="/" element={<FeedbackForm />} />
            <Route path="/sandbox" element={<SandboxPage />} />
          </Routes>
        </main>
      </div>

      <Footer />
      </div>
      </BrowserRouter>
  );
};

export default App;