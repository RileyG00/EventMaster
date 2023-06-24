/*==================================================================================
[0] Imports
==================================================================================*/
import Input from "../../atoms/inputs/Input";

/*==================================================================================
[1] Generate Final
==================================================================================*/
const LoginInputContainer = () => {
    /*==============================================================================
    [1] Return Final
    ==============================================================================*/
    return (
        <div className="input-container flex-column gap-1">
            <Input
                inputType="text"
                inputID="login-username"
                labelText="Username"
                placeholder="Username"
            />
            <Input
                inputType="password"
                inputID="login-password"
                labelText="Password"
                placeholder="Password"
            />
        </div>
    )
}


export default LoginInputContainer;