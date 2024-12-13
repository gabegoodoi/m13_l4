import { Container, Col } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
    return (
        <Container>
            <Col>
                <h1>Welcome to the JWT Auth App</h1>
                <Link to="/login">Log In</Link>
            </Col>
        </Container>
    );
};

export default HomePage;