import React, { Component } from 'react';
import * as apisw from '../../services/apiswGets';
import Table from 'react-bootstrap/Table';

//Import CSS
import '../../App.css';
import './Planets.css';

//Import componentes
import Loading from '../../components/Atomos/Loading/Loading';

export default class Planets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: [],
            loading: true
        };
    }

    componentDidMount() {
        apisw.getPlanets()
            .then(planets => {
                this.setState({ planets })
                this.setState({ loading: false })
            })
    }

    render() {
        return (
            <div className="padding-principal">
                <h1 style={{ marginBottom: 30 }} className="centraliza-titulo titulo-grande">Planetas</h1>
                <div className="centraliza-tabela scroll-table">
                    <Table striped bordered hover className="centraliza-colunasTabela">
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
                <Loading loading={this.state.loading} />
            </div>
        )
    }
}
