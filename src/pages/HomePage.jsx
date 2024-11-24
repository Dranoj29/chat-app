import React from 'react';
import Header from "../component/header/Header";
import Login from "../component/login/Login";

function HomePage(props) {
    return (
        <div>
            <Header/>
            <Login/>
        </div>
    );
}

export default HomePage;