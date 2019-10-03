import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//Import CSS
import '../../App.css';
import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <div className="padding-login">
                <div className="centralizar">
                    <h1 className="centraliza-titulo">Login</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Endereço de email</Form.Label>
                        <Form.Control type="email" placeholder="Digite seu email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Digite sua senha" />
                    </Form.Group>
                        <Button variant="dark" type="submit" className="button-logar">Logar</Button>
                </Form>
                </div>
            </div>
        )
    }
}