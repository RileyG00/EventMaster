/*==================================================================================
[0] Imports
==================================================================================*/
//General
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//CSS
import "../src/css/index.css";
import "../src/css/pages.css";
import "../src/css/templates.css";
import "../src/css/organisms.css";
import "../src/css/molecules.css";
import "../src/css/atoms.css";
import "../src/css/media.css";

//JS
import "./js/Helpers";

//Pages
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";


/*==================================================================================
[1] Generate Final
==================================================================================*/
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Router>
    )
}

export default App
