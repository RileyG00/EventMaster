/*=======================================================================================
[1] Imports
=======================================================================================*/
import LinkOutButton from "../../atoms/buttons/LinkOutButton";
import { useSelector, useDispatch } from "react-redux";
import { toggleState } from "../../../app/features/HamburgerSlice";


/*=======================================================================================
[2] Contruct Return
=======================================================================================*/
const NavLinkContainer = () => {
    /*===================================================================================
    [1] Constants
    ===================================================================================*/
    const isHamburgerActive = useSelector((state) => state.hamburgerState.isActive);
    const isLoggedIn = useSelector((state) => state.LoginState.isLoggedIn);
    const dispatch = useDispatch();

    let navLinks = [
        {text: "Home", linkLocation: "/", onClickAction: () => dispatch(toggleState())},
    ];
    
    if(!isLoggedIn) {
        navLinks.push(
            {text: "Login", linkLocation: "/login", onClickAction: () => dispatch(toggleState())},
        );
    } else {
        navLinks.push(
            {text: "Menu", linkLocation: "/menu", onClickAction: () => dispatch(toggleState())},
            {text: "Event Manager", linkLocation: "/event-manager", onClickAction: () => dispatch(toggleState())},
            {text: "Account", linkLocation: "/account", onClickAction: () => dispatch(toggleState())},
            {text: "Signout", linkLocation: "/signout", onClickAction: () => dispatch(toggleState())},
        );
    }
    
    
    /*===================================================================================
    [2] Final Return
    ===================================================================================*/
    return (
        <div className={`navbar-links${isHamburgerActive ? " active" : ""}`}>
            {navLinks.map((link, index) => {
                return (
                    <LinkOutButton
                        key={index}
                        classList="nav-link"
                        linkTo={link.linkLocation}
                        btnText={link.text}
                        btnAction={link.onClickAction}
                    />
                )
            })}
        </div>
    )
}



export default NavLinkContainer;