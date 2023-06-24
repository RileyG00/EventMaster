/*==================================================================================
[0] Imports
==================================================================================*/
import GeneralTextHOne from "../../../atoms/text/GeneralTextHOne";
import GeneralTextSpan from "../../../atoms/text/GeneralTextSpan";


/*==================================================================================
[1] Generate Final
==================================================================================*/
const HeaderSubText = () => {
    /*==============================================================================
    [1] Return Final
    ==============================================================================*/
    return (
        <div className="flex-column gap-05 flex-align-center">
            <GeneralTextHOne classList="center-text" text="Welcome to Event Master"/>
            <GeneralTextSpan classList="center-text" text="Login to create, edit, and review events and menu items"/>
        </div>
    )
}


export default HeaderSubText;