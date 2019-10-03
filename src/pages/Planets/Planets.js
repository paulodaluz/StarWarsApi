import React, { Component } from 'react';
import * as apisw from '../../services/apisw';
import Table from 'react-bootstrap/Table';
import './Planets.css';

export default class Planets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: []
        };
    }

    componentDidMount() {
        apisw.getPlanets()
            .then(planets => this.setState({ planets }))
    }

    render() {
        return (
            <div style={{ padding: '200px 200px 100px 200px' }}>
                <h3 style={{ marginBottom: 30 }} >Planetas</h3>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#id</th>
                            <th>Nome</th>
                            <th>Clima</th>
                            <th>População</th>
                            <th>Período Orbital</th>
                            <th>Diametro</th>
                            <th>Gravidade</th>
                            <th>Terreno</th>
                        </tr>
                            {this.state.planets.map((item, i) => {
                                return <tr key={i}>
                                    <th>{i+1}</th>
                                    <th>{item.name}</th>
                                    <th>{item.climate}</th>
                                    <th>{item.population}</th>
                                    <th>{item.orbital_period}</th>
                                    <th>{item.diameter}</th>
                                    <th>{item.gravity}</th>
                                    <th>{item.terrain}</th>
                                </tr>   
                            })}
                    </thead>
                </Table>
            </div>
        )
    }
}