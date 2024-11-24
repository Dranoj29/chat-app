import React from 'react';
import {Container, Navbar} from "react-bootstrap";

const Header = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home"><strong className={"color-primary"}>Simple Chat App</strong></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Jonnard
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;