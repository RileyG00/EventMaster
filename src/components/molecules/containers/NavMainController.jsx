/*=======================================================================================
[1] Imports
=======================================================================================*/
import NavLinkContainer from "../containers/NavLinkContainer";
import GeneralTextSpan from "../../atoms/text/GeneralTextSpan"

/*=======================================================================================
[2] Construct Final
=======================================================================================*/
const NavMainController = () => {
    return (
        <div className="nav-main-controller">
            <GeneralTextSpan text={"Humuya Inn"} classList={"brand-text"}/>
            <NavLinkContainer/>
        </div>
    )
}


export default NavMainController;