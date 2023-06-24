/*=======================================================================================
[1] Imports
=======================================================================================*/
import LinkOutButton from "../../atoms/buttons/LinkOutButton";
import { useSelector } from "react-redux";


/*=======================================================================================
[2] Contruct Return
=======================================================================================*/
const NavLinkContainer = () => {
    /*===================================================================================
    [1] Constants
    ===================================================================================*/
    const isHamburgerActive = useSelector((state) => state.hamburgerState.isActive);
    
    const navLinks = [
        {text: "Home", linkLocation: "/"},
        {text: "Menu", linkLocation: "/menu"},
        {text: "Login", linkLocation: "/login"},
    ];


    /*===================================================================================
    [2] Final Return
    ===================================================================================*/
    return (
        <div className={`navbar-links${isHamburgerActive ? " active" : ""}`}>
            {navLinks.map((link, index) => {
                return (
                    <LinkOutButton
                        key={index}
                        linkTo={link.linkLocation}
                        btnText={link.text}
                    />
                )
            })}
        </div>
    )
}



export default NavLinkContainer;