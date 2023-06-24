/*=======================================================================================
[1] Imports
=======================================================================================*/
import { Link } from "react-router-dom";


/*=======================================================================================
[2] Contruct Return
=======================================================================================*/
const LinkOutButton = ({linkTo, btnText, classList, btnAction}) => {
    return (
        <Link
            className={classList}
            to={linkTo}
            onClick={btnAction}
        >
            {btnText}
        </Link>
    )
}


export default LinkOutButton;