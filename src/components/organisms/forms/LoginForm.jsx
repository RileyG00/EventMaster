/*==================================================================================
[0] Imports
==================================================================================*/
import database from "../../../js/firebase";
import { useState } from 'react';
import {collection, query, where, getDocs} from "firebase/firestore";
import LoginContainer from "../containers/LoginContainer";
import MetricsSVG from "../../atoms/svg/metrics.svg";
import { useDispatch } from "react-redux";
import { loginUser, logoutUser } from "../../../redux/Slices/Login";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../../js/Helpers";


/*==================================================================================
[1] Generate Final
==================================================================================*/
const LoginForm = () => {
    /*==============================================================================
    [1] Constants
    ==============================================================================*/
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userCollection = collection(database, "users");
        const userQuery = query(
                                userCollection,
                                where("Username", "==", username),
                                where("Password", "==", password),
                                where("isActive", "==", true),
                            );
        const userSnapshot = await getDocs(userQuery);

        if (userSnapshot.size === 0) {
            dispatch(logoutUser());
        } else {
            userSnapshot.forEach((doc) => {
                const userData = doc.data();
                const userJSON = {
                    DocumentID: doc.id,
                    FirstName: userData.FirstName,
                    LastName: userData.LastName,
                    Username: userData.Username
                };
                dispatch(loginUser());
                setCookie(userCredentialName, JSON.stringify(userJSON), 8);
                navigate("/recipes");

                console.log(userJSON);
            });
        }
    }
    
    
    /*==============================================================================
    [2] Return Final
    ==============================================================================*/
    return (
        <form id="loginForm" className="height-100 flex-grow flex-box-row gap-5 flex-jc-center flex-ai-center" onSubmit={handleSubmit}>
            <LoginContainer
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
            />
            <img src={MetricsSVG} alt="Metrics with pie char and bar graph" />
        </form>
    )
}


/*==================================================================================
[2] Exports
==================================================================================*/
export default LoginForm;





