import React, { Component } from 'react';
import * as apisw from '../../services/apisw';
import Table from 'react-bootstrap/Table';
import { BeatLoader } from 'react-spinners';

//Import CSS
import '../../App.css';
import './People.css';

export default class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [],
            loading: true
        };
    }

    componentDidMount() {
        apisw.getPersons()
            .then(persons => {
                this.setState({ persons })
                this.setState({ loading: false })
        })
    }

    render() {
        return (
            <div className="padding-principal">
                <h3 style={{ marginBottom: 30 }} className="centraliza-titulo">Personagens</h3>
                <Table striped bordered hover className="centraliza-tabela centraliza-colunasTabela">
                    <thead>
                        <tr>
                            <th>#id</th>
                            <th>Nome</th>
                            <th>Genero</th>
                            <th>skin color</th>
                            <th>Altura</th>
                            <th>Peso</th>
                        </tr>

                        <div className="loading-tables">
                            <BeatLoader
                                sizeUnit={"px"}
                                size={80}
                                color={'black'}
                                loading={this.state.loading}
                        />
                        </div>

                        {this.state.persons.map((item, i) => {
                            return <tr key={i}> 
                            <th>{i+1}</th>
                            <th>{item.name}</th>
                            <th>{item.gender}</th>
                            <th>{item.skin_color}</th>
                            <th>{item.height}</th>
                            <th>{item.mass}</th>
                            </tr>
                        })}
                    </thead>
                </Table>
            </div>
        )
    }
}
