/*=======================================================================================
[1] Imports
=======================================================================================*/
import NavMainController from "../../molecules/containers/NavMainController";
import HamburgerMenu from "../../atoms/buttons/HamburgerMenu";


/*=======================================================================================
[2] Contruct Return
=======================================================================================*/
const TopNavBar = () => {
    return (
        <header>
            <nav className="navbar">
                <NavMainController/>
                <HamburgerMenu/>
            </nav>
        </header>
    )
}


export default TopNavBar;