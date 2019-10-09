import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

//Import CSS
import '../../App.css';
import './Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: ''            
        };
    }
    logar() {
        var email = this.state.email
        var senha = this.state.senha
        console.log(email, senha)
    }

    render() {
        return (
            <div className="padding-login imagem-background-login">
                <div className="painel">
                    <h1 className="centraliza-titulo">Login</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Endereço de email</Form.Label>
                                <Form.Control type="email" placeholder="Digite seu email" 
                                    onInput={(e) => 
                                        this.setState({ email: e.target.value })}
                                />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Digite sua senha"
                                    onInput={(e) => 
                                        this.setState({ senha: e.target.value })}
                                />
                        </Form.Group>

                        <Button variant="dark" className="button-logar" 
                            onClick={() => this.logar()} 
                        >Logar</Button>

                        <div className="criar-cadastro">
                            <Link to="/cadastro">Voce ainda não possui uma conta?</Link>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}