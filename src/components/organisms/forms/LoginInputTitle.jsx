/*==================================================================================
[0] Imports
==================================================================================*/
import LoginInputContainer from "../../molecules/containers/LoginInputContainer";
import SubmitBtn from "../../atoms/buttons/SubmitBtn";
import HeaderSubText from "../../molecules/containers/textBlocks/HeaderSubText";


/*==================================================================================
[1] Generate Final
==================================================================================*/
const LoginInputTitle = () => {
    /*==============================================================================
    [1] Return Final
    ==============================================================================*/
    return (
        <div className="width100 height100 flex-column flex-jc-sb flex-grow">
            <div className="flex-column gap-3">
                <HeaderSubText/>
                <LoginInputContainer/>
            </div>
            <SubmitBtn classList="btn btn-action border-radius" text="Login"/>
        </div>
    )
}


export default LoginInputTitle;