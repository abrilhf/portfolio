import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";
import NavBar from './components/NavBar';
import "./css/estilos.css";
import ProjectBartoDetail from "./components/ProjectBartoDetail";
import ProjectMalenaDetail from "./components/ProjectMalenaDetail";
import ProjectLumiereDetail from "./components/ProjectLumiereDetail";
import ProjectAlquimiaDetail from "./components/ProjectAlquimiaDetail";


function App() {


    return (
        <div className="web">

        <>
            
            <NavBar></NavBar>

            <Routes>

                <Route path="/" element={<HomePage/>}/>
                <Route path="/projectbarto" element={<ProjectBartoDetail/>}/>
                <Route path="/projectmalena" element={<ProjectMalenaDetail/>}/>
                <Route path="/projectlumiere" element={<ProjectLumiereDetail/>}/>
                <Route path="/projectalquimia" element={<ProjectAlquimiaDetail/>}/>

            </Routes>
            
            </>
            


        </div>
    )


}

export default App


