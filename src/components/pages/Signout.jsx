/*==================================================================================
[0] Imports
==================================================================================*/
import TopNavBar from "../organisms/navigation/TopNavbar";
import { useSelector, useDispatch } from "react-redux";
import { setCookie } from "../../js/Helpers";
import { logoutUser } from "../../app/features/LoginStatusSlice";
import { useEffect } from "react";
import SignoutSection from "../templates/sections/SignoutSection";


/*==================================================================================
[1] Generate Final
==================================================================================*/
const Signout = () => {
    /*==============================================================================
    [1] Constants
    ==============================================================================*/
    const dispatch = useDispatch();

    //If user visits this page, delete logged in cookie
    const isLoggedIn = useSelector((state) => state.LoginState.isLoggedIn); 
    if(isLoggedIn) setCookie("userid", "", 0);
    
    //Have to use useEffect so that we are not updating the nav component
        //and the logged in state at the same time
    useEffect(() => {
        dispatch(logoutUser());
    }, [])
    

    /*==============================================================================
    [2] Return Final
    ==============================================================================*/
    return (
        <div className="return-container flex-column bg-one">
            <TopNavBar/>
            <SignoutSection/>
        </div>
    )
}


export default Signout;
