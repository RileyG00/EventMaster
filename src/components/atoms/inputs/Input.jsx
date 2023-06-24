/*==================================================================================
[0] Generate Final
==================================================================================*/
const Input = ({labelText, inputID, inputType, placeholder, classList = "input-field", isLabelHidden = true}) => {
    /*==============================================================================
    [1] Return Final
    ==============================================================================*/
    return (
        <>
            <label htmlFor={inputID} style={{display: isLabelHidden ? "none" : null}}>{labelText}</label>
            <input className={classList} type={inputType} id={inputID} placeholder={placeholder}/>
        </>
    )
}



export default Input;