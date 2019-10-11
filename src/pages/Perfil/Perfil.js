import React, { Component } from 'react';

import {Image, Container, Row, Col} from 'react-bootstrap';

//Import CSS
import '../../App.css';
import './Perfil.css';

export default class Perfil extends Component {
    constructor(props){
        super(props)
        this.state = {
            nome: 'Luis Carlos Santana',
            idade: '27 anos',
            email: 'luiscarlos@gmail.com',
            senha: '**********'
        }
    }
    render() {
        return (
            <div className="padding-principal imagem-background-perfil">
                <div className="painel">
                    <h1 className="centraliza-titulo">Perfil</h1>
                    <Container>
                        <Row>
                            <Col xs={6} md={4}>
                                <div className="bola">
                                    <Image src="imagemPerfil.jpg" className="foto-de-perfil" roundedCircle />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className="informacoes-pessoa">
                        <h3>Nome:</h3> <p className="dados-pessoa">{this.state.nome}</p>
                        <h3>idade:</h3> <p className="dados-pessoa">{this.state.idade}</p>
                        <h3>Email:</h3> <p className="dados-pessoa">{this.state.email}</p>
                        <h3>Senha:</h3> <p className="dados-pessoa">{this.state.senha}</p>
                    </div>
                </div>
            </div>
        )
    }
}
