/*==================================================================================
[0] Imports
==================================================================================*/
import { useEffect } from "react";
import NavBar from "../molecules/navigation/NavBar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


/*==================================================================================
[1] Generate Final
==================================================================================*/
const Recipes = () => {
    /*==============================================================================
    [1] Constants
    ==============================================================================*/
    //Ensure user is logged in before continuing
    const isLoggedIn = useSelector((state) => state.LoginStatus.isLoggedIn);
    const navigate = useNavigate();
    
    useEffect(() => {
        if(!isLoggedIn) navigate("/login");
    })


    /*==============================================================================
    [2] Return Final
    ==============================================================================*/
    return (
        <div className="page-container">
            <NavBar/>
        </div>
    )
}


export default Recipes;

