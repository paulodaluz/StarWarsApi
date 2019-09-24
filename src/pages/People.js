import React, { Component } from 'react';
import * as apisw from '../services/apisw';
import Table from 'react-bootstrap/Table';

export default class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: []
        };
    }

    componentDidMount() {
        apisw.getPersons()
            .then(persons => this.setState({ persons }))
    }

    render() {
        return (
            <div style={{padding: '200px 200px 100px 200px'}}>
                <h3 style={{marginBottom: 30}} >Personagens</h3>
                <Table striped bordered hover>
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
        )
    }
}
