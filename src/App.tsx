import Navbar from './components/navbar-component/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SidebarComponent from './components/sidebar-component/SidebarComponent';
import './styles/App.scss';
import { useState } from 'react';
import NotFoundPage from './pages/not-found-page/NotFoundPage';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <Navbar />
      <SidebarComponent isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <div className="app-content" style={{ marginLeft: isSidebarVisible ? '250px' : '0' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
