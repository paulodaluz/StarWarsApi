import React, { Component } from 'react';
import * as apisw from '../../services/apisw';
import Table from 'react-bootstrap/Table';

//Import CSS
import '../../App.css';
import './Starships.css';

export default class Starships extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starships: []
        };
    }

    componentDidMount() {
        apisw.getStarships()
            .then(starships => this.setState({ starships }))
    }

    render() {
        return (
            <div className="padding-principal">
                <h3 style={{ marginBottom: 30 }} className="centraliza-titulo">Naves Espáciais</h3>
            
                <div className="centraliza-tabela">
                    <Table striped bordered hover className="centraliza-tabela centraliza-colunasTabela">
                    <thead>
                        <tr>
                            <th>#id</th>
                            <th>Nome</th>
                            <th>Capacidade de carga</th>
                            <th>Consumiveis</th>
                            <th>Equipe Técnica</th>
                            <th>Classificação Hyperdrive</th>
                            <th>Comprimento</th>
                            <th>Fabricante</th>
                            <th>Vel. Max. na Atmosfera</th>
                            <th>Modelo</th>
                            <th>Qnt. Max. de Passageiros</th>
                        </tr>
                {this.state.starships.map((item, i) => {
                    return <tr key={i}>
                        <th>{i+1}</th>
                        <th>{item.name}</th>
                        <th>{item.cargo_capacity}</th>
                        <th>{item.consumables}</th>
                        <th>{item.crew}</th>
                        <th>{item.hyperdrive_rating}</th>
                        <th>{item.length}</th>
                        <th>{item.manufacturer}</th>
                        <th>{item.max_atmosphering_speed}</th>
                        <th>{item.model}</th>
                        <th>{item.passengers}</th>
                    </tr>
                })}
                    </thead>
                </Table>
                </div>
            </div>
        )
    }
}

