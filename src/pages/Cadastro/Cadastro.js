import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//Import CSS
import '../../App.css';
import './Cadastro.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            idade: '',
            email: '',
            senha: ''            
        };
    }

    criar() {
        var email = this.state.email
        var senha = this.state.senha
        var nome = this.state.nome
        var idade= this.state.idade

        console.log(nome, email, senha, idade)
    }

    render() {
        return (
            <div className="padding-principal imagem-background-cadastro">
                <div className="painel">
                    <h1 className="centraliza-titulo">Cadastro</h1>
                    <Form>

                        <Form.Group controlId="formBasic">
                            <Form.Label>Nome Completo</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu nome"
                                onInput={(e) =>
                                    this.setState({ nome: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Endereço de email</Form.Label>
                                <Form.Control type="email" placeholder="Digite seu endereço de email" 
                                    onInput={(e) => 
                                        this.setState({ email: e.target.value })}
                                />
                                <Form.Text className="text-muted">
                                    Digite um endereço de email válido.
                                </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Digite sua senha"
                                    onInput={(e) => 
                                        this.setState({ senha: e.target.value })}
                                />
                                <Form.Text className="text-muted">
                                    Digite uma senha de no mínimo 8 caracteres.
                                </Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Idade</Form.Label>
                                <Form.Control type="number" placeholder="Digite sua idade"
                                    onInput={(e) => 
                                        this.setState({ idade: e.target.value })}
                                />
                        </Form.Group>

                        <Button variant="dark" className="button-cadastrar" 
                        onClick={() => this.criar()} 
                        >Cadastrar</Button>
                            
                    </Form>
                </div>
            </div>
        )
    }
}