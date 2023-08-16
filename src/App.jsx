/*==================================================================================
[0] Imports
==================================================================================*/
//General
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
import Recipes from "./components/pages/Recipes";
import Login from "./components/pages/Login";



/*==================================================================================
[1] Generate Final
==================================================================================*/
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Recipes/>}/>
                <Route path="/recipes" element={<Recipes/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Router>
    )
}

export default App
