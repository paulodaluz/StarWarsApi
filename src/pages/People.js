import React, { Component } from 'react'
import * as apisw from '../services/apisw';

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
                <div style={{'padding': '200px 200px 100px 0'}}>
                <h3>Personagens</h3>
                    <br/>
                    {this.state.persons.map((item, i) => {
                        console.log(item);
                        return (<div key={i}> {item.name}</div>);
                    })}
                </div>
        )
    }
}
