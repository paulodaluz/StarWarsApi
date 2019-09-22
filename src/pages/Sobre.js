import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Sobre extends Component {
    render() {
        const divStyle = {
            "max-width": "250px",
            "max-height": "150px"
        };

        return (
        <div style={{ 'padding': '200px 200px 100px 0' }}>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image style={divStyle} src="img/my-picture.jpg" roundedCircle />
                    </Col>
                </Row>
            </Container>
            <h1>Paulo Ricardo da Luz Júnior</h1>
            <p>Idade: 18 anos</p>
            <p>Bio: Gamer, desenvolvedor e louco por tecnologias.</p>
            <p>Caso possua alguma duvida entre em contato comigo através de:</p>
            <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5554991087297">Chat no Whatsapp</a>
        </div>);
    }
}