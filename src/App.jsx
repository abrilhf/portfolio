import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./css/estilos.css";
import HomePage from "./pages/HomePage";
import ProjectBartoDetail from "./components/ProjectBartoDetail";
import ProjectMalenaDetail from "./components/ProjectMalenaDetail";
import ProjectLumiereDetail from "./components/ProjectLumiereDetail";
import ProjectAlquimiaDetail from "./components/ProjectAlquimiaDetail";
import ProjectDepilyDetail from "./components/ProjectDepilyDetail";
import ProjectTarjetasDetail from "./components/ProjectTarjetasDetail";
import Loader from "./pages/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulamos 2 segundos de carga

    setTimeout(() => {
      setShowContent(true);
    }, 2002);
  }, []);

  return (
    <div className="web">
      {loading ? (
        <Loader />
      ) : (
        <div className={showContent ? "content show" : "content"}>
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projectbarto" element={<ProjectBartoDetail />} />
            <Route path="/projectmalena" element={<ProjectMalenaDetail />} />
            <Route path="/projectlumiere" element={<ProjectLumiereDetail />} />
            <Route path="/projectalquimia" element={<ProjectAlquimiaDetail />} />
            <Route path="/projecttarjetas" element={<ProjectTarjetasDetail />} />
            <Route path="/projectdepily" element={<ProjectDepilyDetail />} />
            </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
