import React from 'react';
import {Form} from "react-bootstrap";

const UserRegistration = () => {
    return (
        <div>
            <div className="w-100 h-100">
                <div className={"login-container center-hv-element p-4 rounded shadow"}>
                    <div className="d-flex justify-content-center color-primary mb-2">
                        <h4>Registration</h4>
                    </div>
                    <Form className={"p-1"}>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="email" placeholder="Enter Username"/>
                            <Form.Text className="text-muted">
                                <small className={"text-danger visually-hidden"}>Username is required.</small>
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                            <Form.Text className="text-muted">
                                <small className={"text-danger visually-hidden"}>Password is required.</small>
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                            <Form.Text className="text-muted">
                                <small className={"text-danger visually-hidden"}>Password is required.</small>
                            </Form.Text>
                        </Form.Group>
                        <button type="submit" className={"w-100 btn custom-btn-primary py-1"}>
                            Submit
                        </button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default UserRegistration;