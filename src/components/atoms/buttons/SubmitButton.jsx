/*==================================================================================
[0] Imports
==================================================================================*/
import PropTypes from 'prop-types';


/*==================================================================================
[1] Generate Export
==================================================================================*/
const SubmitButton = ({btnText = "Submit", buttonStyling}) => {
    /*==============================================================================
    [0] Generate Return
    ==============================================================================*/
    return (
        <button type="submit" className={`btn btn-action ${buttonStyling}`}>
            {btnText}
        </button>
    )
}


/*==================================================================================
[2] Exports
==================================================================================*/
export default SubmitButton;


/*==================================================================================
[3] PropTypes
==================================================================================*/
SubmitButton.propTypes = {
    btnText: PropTypes.string,
    buttonStyling: PropTypes.string.isRequired
};


