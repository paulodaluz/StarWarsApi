import React, { Component } from 'react';
import * as apisw from '../services/apisw';

export default class Planets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: []
        };
    }

    componentDidMount() {
        apisw.getPlanets()
            .then(planets => this.setState({ planets }))
    }

    render() {
        return (
            <div style={{ 'padding': '200px 200px 100px 0' }}>
                <h3>Planetas</h3>
                <br />
                {this.state.planets.map((item, i) => {
                    return (<div key={i}> {item.name}</div>);
                })}
            </div>
        )
    }
}
