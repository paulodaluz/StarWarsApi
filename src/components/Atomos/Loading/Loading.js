import React, { Component } from 'react'
import { BeatLoader } from 'react-spinners';

//Import CSS
import '../../../App.css';
import './Loading.css';

export default class Loading extends Component {
    render() {
        return (
            <div>
                <BeatLoader
                    sizeUnit={"px"}
                    size={80}
                    color={'black'}
                    loading={this.props.loading}
                />
            </div>
        )
    }
}
