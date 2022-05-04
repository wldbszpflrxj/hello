import {Component} from 'react';

export default class TitleBar extends Component{
    render() {
        return(
            <h1>{this.props.text}</h1>
        )
    }
}