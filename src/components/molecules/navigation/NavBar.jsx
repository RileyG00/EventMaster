/*==================================================================================
[0] Imports
==================================================================================*/
import NavButton from "../../atoms/buttons/NavButton";
import { useSelector } from "react-redux";


/*==================================================================================
[1] Generate Export
==================================================================================*/
const NavBar = () => {
    /*==============================================================================
    [0] Constants
    ==============================================================================*/
    const isLoggedin = useSelector((state) => state.LoginStatus.isLoggedIn);
    const isAdmin = true; //NEED TO UPDATE ONCE FIREBASE IS UP


    let NavLinks = [];

    if (isLoggedin) {
        NavLinks.push(
            {btnText: "Recipes", btnLinkOut: "/recipes"},
            {btnText: "Ingredients", btnLinkOut: "/ingredients"},
            {btnText: "Signout", btnLinkOut: "/signout"}
        );

        if (isAdmin) {
            NavLinks.splice(2, 0,
                {btnText: "Analysis", btnLinkOut: "/analysis"},
                {btnText: "Admin Portal", btnLinkOut: "/admin-portal"}
            );
        }
    } else {
        NavLinks.push({btnText: "Login", btnLinkOut: "/login"});
    }


    /*==============================================================================
    [1] Generate Return
    ==============================================================================*/
    return (
        <nav className="navbar">
            {
                NavLinks.map((link, index) => {
                    return (
                        <NavButton 
                            btnText={link.btnText}
                            btnLinkOut={link.btnLinkOut}
                            key={index}
                        />
                    )
                })
            }
        </nav>
    )
}


export default NavBar;



