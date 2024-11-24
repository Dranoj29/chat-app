import React from 'react';
import "./login.css"
import {Form} from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";



const UserLogin = ({onRegistrationClick}) => {
    return (
        <div className="w-100 h-100">
            <div className={"login-container center-hv-element p-4 rounded shadow"}>
                <div className="d-flex justify-content-center color-primary mb-2">
                    <h4>Login</h4>
                </div>
                <Form className={"p-1"}>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" placeholder="Enter Username"/>
                        <Form.Text className="text-muted">
                            <small className={"text-danger"}>Username is required.</small>
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <div className={"position-relative"}>
                            <FaRegUser className={"input-icon-l pe-1"}/>
                            <Form.Control type="password" placeholder="Password" className={"ps-4"}/>
                        </div>
                        <Form.Text className="text-muted">
                            <small className={"text-danger"}>Password is required.</small>
                        </Form.Text>
                    </Form.Group>
                    <button type="submit" className={"w-100 btn custom-btn-primary py-2"}>
                        Submit
                    </button>
                    <div className={"d-flex justify-content-center pt-2"}>
                        <p onClick={onRegistrationClick} className={"color-primary-hover"}>Create User  <FaArrowRightLong className={"ms-1"}/></p>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default UserLogin;