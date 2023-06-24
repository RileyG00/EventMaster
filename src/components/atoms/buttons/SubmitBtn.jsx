const SubmitBtn = ({classList, text}) => {
    return (
        <button type="submit" className={classList} title={text}>
            {text}
        </button>
    )
}

export default SubmitBtn;