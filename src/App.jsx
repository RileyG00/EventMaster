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
import Signout from "./components/pages/Signout";
import Account from "./components/pages/Account";
import EventManager from "./components/pages/EventManager";
import MenuManager from "./components/pages/MenuManager";


/*==================================================================================
[1] Generate Final
==================================================================================*/
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signout" element={<Signout/>}/>
                <Route path="/account" element={<Account/>}/>
                <Route path="/event-manager" element={<EventManager/>}/>
                <Route path="/menu-manager" element={<MenuManager/>}/>
                <Route path="/*" element={<Home/>}/>
            </Routes>
        </Router>
    )
}

export default App
