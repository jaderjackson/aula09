import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import ImageBackground from '../../images/02.jpg'
import Zero from '../../images/02.jpg'


const styles ={
    backgroundImage: `url(${ImageBackground})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `50ps 50px`,
    backgroundSize: `cover`,
    height: '100vh'
};

function Login() {
    return (
        <div className='tela_login'>
            <Row>
                <Col xs={12} md={6} className="img-login" style={styles}></Col>
                <Col xs={12} md={6} >
                    <Row>
                        <Col md={{ span: 8, offset: 2 }}>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Acessar
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Login;