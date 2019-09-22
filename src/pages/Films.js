import React, { Component } from 'react';
import * as apisw from '../services/apisw';

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
                {this.state.films.map((item, i) => {
                    console.log(item);
                    return (<div key={i}> {item.title}</div>);
                })}
            </div>
        )
    }
}
