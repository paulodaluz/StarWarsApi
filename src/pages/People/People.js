import React, { Component } from 'react';
import * as apisw from '../../services/apiswGets';
import Table from 'react-bootstrap/Table';

//Import CSS
import '../../App.css';
import './People.css';

//Import componentes
import Loading from '../../components/Atomos/Loading/Loading';

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
                <h1 style={{ marginBottom: 30 }} className="centraliza-titulo titulo-grande">Personagens</h1>
                <div className="centraliza-tabela scroll-table">
                    <Table striped bordered hover className="centraliza-colunasTabela">
                        <thead>
                            <tr>
                                <th>#id</th>
                                <th>Nome</th>
                                <th>Genero</th>
                                <th>skin color</th>
                                <th>Altura</th>
                                <th>Peso</th>
                            </tr>

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
                <Loading loading={this.state.loading} />
            </div>
        )
    }
}
