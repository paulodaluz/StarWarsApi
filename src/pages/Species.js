import React, { Component } from 'react';
import * as apisw from '../services/apisw';
import Table from 'react-bootstrap/Table';

export default class Species extends Component {
    constructor(props) {
        super(props);
        this.state = {
            species: []
        };
    }

    componentDidMount() {
        apisw.getSpecies()
            .then(species => this.setState({ species }))
    }

    render() {
        return (
            <div style={{ 'padding': '200px 200px 100px 0' }}>
                <h3>Espécies</h3>
                <br />

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#id</th>
                            <th>Nome</th>
                            <th>Classificação</th>
                            <th>Designação</th>
                            <th>Tempo de vida médio</th>
                            <th>Altura Média</th>
                            <th>Lingua</th>
                            <th>Cor da Skin</th>
                        </tr>

                        {this.state.species.map((item, i) => {
                            return <tr key={i}>
                                <th>{i+1}</th>
                                <th>{item.name}</th>
                                <th>{item.classification}</th>
                                <th>{item.designation}</th>
                                <th>{item.average_lifespan}</th>
                                <th>{item.average_height}</th>
                                <th>{item.language}</th>
                                <th>{item.skin_colors}</th>
                            </tr>   
                        })}
                    </thead>
                </Table>
            </div>
        )
    }
}
