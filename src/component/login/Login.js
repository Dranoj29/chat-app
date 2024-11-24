import React, {useState} from 'react';
import UserLogin from "./user-login/UserLogin";
import UserRegistration from "./user-registration/UserRegistration";



const Login = () => {

    const [showRegistrationView, setShowRegistrationView] = useState(false)

    const toggleView = () => {
        setShowRegistrationView(!showRegistrationView);
    }

    return (
        <div>
            {showRegistrationView ?  <UserRegistration /> : <UserLogin onRegistrationClick={toggleView}/> }
        </div>
    );
};

export default Login;