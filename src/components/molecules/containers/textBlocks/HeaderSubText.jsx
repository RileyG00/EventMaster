/*==================================================================================
[0] Imports
==================================================================================*/
import GeneralTextHOne from "../../../atoms/text/GeneralTextHOne";
import GeneralTextSpan from "../../../atoms/text/GeneralTextSpan";


/*==================================================================================
[1] Generate Final
==================================================================================*/
const HeaderSubText = ({headerText, subText}) => {
    /*==============================================================================
    [1] Return Final
    ==============================================================================*/
    return (
        <div className="flex-column gap-05 flex-align-center">
            <GeneralTextHOne classList="center-text" text={headerText}/>
            <GeneralTextSpan classList="center-text" text={subText}/>
        </div>
    )
}


export default HeaderSubText;