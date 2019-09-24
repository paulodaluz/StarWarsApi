import React, { Component } from 'react';
import * as apisw from '../services/apisw';
import Table from 'react-bootstrap/Table';

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
            <div style={{ 'padding': '200px 200px 100px 0' }}>
                <h3>Filmes</h3>
                <br/>
                <Table striped bordered hover>
                    <thead>
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
