/*==================================================================================
[0] Imports
==================================================================================*/
import TopNavBar from "../organisms/navigation/TopNavbar";
import { toggleLoginStatus } from "../../app/features/LoginStatusSlice";
import { useSelector } from "react-redux";
import { setCookie } from "../../js/Helpers";


/*==================================================================================
[1] Generate Final
==================================================================================*/
const Home = () => {
    /*==============================================================================
    [1] Constants
    ==============================================================================*/
    // Anytime the logged in user visits the home page, reset the cookie expiration status
    const isLoggedIn = useSelector((state) => state.LoginState.isLoggedIn); 
    if(isLoggedIn) setCookie("userid", "placeholdervalue", 6);


    /*==============================================================================
    [2] Return Final
    ==============================================================================*/
    return (
        <div className="return-container bg-one">
            <TopNavBar/>
        </div>
    )
}


export default Home;

