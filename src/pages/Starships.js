import React, { Component } from 'react';
import * as apisw from '../services/apisw';
import Table from 'react-bootstrap/Table';

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
            <div style={{ 'padding': '200px 200px 100px 0' }}>
                <h3>Naves Espáciais</h3>
                <br />
                {this.state.starships.map((item, i) => {
                    console.log(item);

                    return (<div key={i}> {item.name}</div>);
                })}
            </div>
        )
    }
}

