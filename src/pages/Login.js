import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Login extends Component {
    render() {
        return (
            <div style={{ 'padding': '200px 200px 100px 0' }}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Endereço de email</Form.Label>
                        <Form.Control type="email" placeholder="Digite seu email" />
                            <Form.Text className="text-muted">
                                Nunca compartilharemos seu email com mais ninguém.
                            </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Digite sua senha" />
                    </Form.Group>

                    <Button variant="primary" type="submit">Logar</Button>
                    
                </Form>

            </div>
        )
    }
}
