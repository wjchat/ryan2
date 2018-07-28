import React,{Component} from 'react'

import NavOption from './navoption'; 
import OpenNav from './opennav'

import './nav.css'

const style = {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(230, 230, 230, 1)",
    position: 'absolute',
    boxSizing: 'border-box',
    paddingTop: '30%',
    paddingBottom: '20%',
    overflow: 'auto',
    transition: '.3s all ease-in-out 0s',
}

export default class NavContent extends Component {
    render(){
        return (
        <ul style = {style} className = {this.props.show ? 'show': 'hide'}>
            <OpenNav open = {true} onClick = {this.props.onClick} />
            <NavOption name = "Welcome" />
            <NavOption name = "Education" />
            <NavOption name = "Academia" />
            <NavOption name = "Honors & Awards" />
            <NavOption name = "Research" />
            <NavOption name = "Publication" />
        </ul>
        );
    }
}

