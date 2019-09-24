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
                {this.state.species.map((item, i) => {
                    console.log(item);
                    
                    return (<div key={i}> {item.name}</div>);
                })}
            </div>
        )
    }
}
