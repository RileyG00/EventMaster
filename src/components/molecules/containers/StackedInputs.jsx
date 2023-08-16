/*==================================================================================
[0] Imports
==================================================================================*/
import InputField from "../../atoms/inputFields/InputField";
import PropTypes from "prop-types";


/*==================================================================================
[1] Generate Export
==================================================================================*/
const StackedInputs = ({ username, setUsername, password, setPassword }) => {
    /*==============================================================================
    [0] Generate Return
    ==============================================================================*/
    return (
        <div className="flex-box-column height-100 width-100 gap-2">
            <InputField
                labelText="Username"
                htmlFor="username"
                inputName="username"
                inputPlaceholder="JohnDoe123"
                inputType="text"
                inputStyling="width-100"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <InputField
                labelText="Password"
                htmlFor="password"
                inputName="password"
                inputPlaceholder="Password"
                inputType="password"
                inputStyling="width-100"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
        </div>
    )
}


/*==================================================================================
[2] Exports
==================================================================================*/
export default StackedInputs;


/*==================================================================================
[3] PropTypes
==================================================================================*/
StackedInputs.propTypes = {
    username: PropTypes.string.isRequired,
    setUsername: PropTypes.func.isRequired,
    password: PropTypes.string.isRequired,
    setPassword: PropTypes.func.isRequired,
}




