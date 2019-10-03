import React, { Component } from 'react';
import * as apisw from '../../services/apisw';
import Table from 'react-bootstrap/Table';

//Import CSS
import '../../App.css';
import './Films.css';

export default class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        };
    }

    componentDidMount() {
        apisw.getFilms()
            .then(films => this.setState({ films }))
    }

    render() {
        return (
            <div className="padding-principal">
                <h3 style={{ marginBottom: 30 }} className="centraliza-titulo" >Filmes</h3>
                <Table striped bordered hover className="centraliza-tabela">
                    <thead className="centraliza-colunasTabela">
                        <tr>
                            <th>#id</th>
                            <th>Titulo</th>
                            <th>Diretor</th>
                            <th>Data de realização</th>
                        </tr>

                        {this.state.films.map((item, i) => {
                            return <tr key={i}>
                                <th>{i+1}</th>
                                <th>{item.title}</th>
                                <th>{item.director}</th>
                                <th>{item.release_date}</th>
                            </tr>   
                        })}
                    </thead>
                </Table>
            </div>
        )
    }
}
