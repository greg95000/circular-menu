import React, { Component } from 'react';
import MenuTile from '../menu-tile/MenuTile';

export default class Menu extends Component {

    render() {
        return (
            <svg width="500px" height="500px">
                <MenuTile height="500" width="500" angleInDegrees="359"/>
            </svg>
        );
    }

}