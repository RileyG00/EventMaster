/*=======================================================================================
[1] Imports
=======================================================================================*/
import { useDispatch,useSelector } from "react-redux";
import { toggleState } from "../../../app/features/HamburgerSlice";


/*=======================================================================================
[2] Construct Final
=======================================================================================*/
const HamburgerMenu = () => {
    /*===================================================================================
    [1] Constants
    ===================================================================================*/
    const dispatch = useDispatch();


    /*===================================================================================
    [2] Return Final
    ===================================================================================*/
    return (
        <button
            type="button"
            title="Toggle menu"
            id="hamburger-menu"
            className="hamburger-menu"
            onClick={() => {dispatch(toggleState());}}
        >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
        </button>
    )
}


export default HamburgerMenu;