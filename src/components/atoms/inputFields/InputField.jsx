/*==================================================================================
[0] Imports
==================================================================================*/
import PropTypes from "prop-types";


/*==================================================================================
[1] Generate Final
==================================================================================*/
const InputField = ({ labelText, htmlFor, inputName, inputPlaceholder, inputType, inputStyling, value, onChange }) => {
    /*==============================================================================
    [1] Constants
    ==============================================================================*/


    /*==============================================================================
    [2] Return Final
    ==============================================================================*/
    return (
        <div className="flex-box-column">
            <label className="text-small margin-bottom-05" htmlFor={htmlFor}>
                {labelText}
            </label>
            <input id={htmlFor} name={inputName} type={inputType} placeholder={inputPlaceholder} className={`input-field border-radius ${inputStyling}`} value={value} onChange={onChange} />
        </div>
    )
}


/*==================================================================================
[2] Exports
==================================================================================*/
export default InputField;


/*==================================================================================
[3] PropTypes
==================================================================================*/
InputField.propTypes = {
    labelText: PropTypes.string.isRequired,
    htmlFor: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    inputPlaceholder: PropTypes.string,
    inputType: PropTypes.string.isRequired,
    inputStyling: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}





