/*==================================================================================
[0] Imports
==================================================================================*/
import StackedInputs from "../../molecules/containers/StackedInputs";
import SubmitButton from "../../atoms/buttons/SubmitButton";
import PropTypes from "prop-types";


/*==================================================================================
[1] Generate Export
==================================================================================*/
const LoginContainer = ({ username, setUsername, password, setPassword }) => {
    /*==============================================================================
    [0] Generate Return
    ==============================================================================*/
    return (
        <div className="glassmorphism form-container-1 border-radius flex-box-column flex-ai-center">
            <h2 className="margin-bottom-3">Welcome - Please Login</h2>
            <StackedInputs username={username} setUsername={setUsername} password={password} setPassword={setPassword} />
            <SubmitButton btnText="Login" buttonStyling="width-100" />
        </div>
    )
}


/*==================================================================================
[2] Exports
==================================================================================*/
export default LoginContainer;


/*==================================================================================
[3] PropTypes
==================================================================================*/
LoginContainer.propTypes = {
    username: PropTypes.string.isRequired,
    setUsername: PropTypes.func.isRequired,
    password: PropTypes.string.isRequired,
    setPassword: PropTypes.func.isRequired
}


