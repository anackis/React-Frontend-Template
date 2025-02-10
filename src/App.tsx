import { Navbar } from "./features/navbar/navbar";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/about-page/about-page";
import { Home } from "./pages/home-page/home-page";
import { Login } from "./pages/login-page/login-page";
import { LeftSidebar } from "./features/sidebars/left-sidebar/left-sidebar";
import "./styles/App.scss";
import { useState } from "react";
import { NotFoundPage } from "./pages/not-found-page/not-found-page";

export function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <Navbar />
      <LeftSidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <div
        className="app-content"
        style={{ marginLeft: isSidebarVisible ? "250px" : "0" }}
      >
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
