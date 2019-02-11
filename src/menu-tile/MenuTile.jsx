import React, { Component} from "react";

export default class MenuTile extends Component {

    constructor(props) {
        super(props);
        this._height = parseInt(this.props.height);
        this._width = parseInt(this.props.width);
        this.angleInDegrees = parseInt(this.props.angleInDegrees);
        this.largeArcFlag = this.angleInDegrees <= 180 ? 0 : 1;
        this._centerX = this._height / 2;
        this._centerY = this._width / 2;
        this.angleInRadians = -this.angleInDegrees * Math.PI / 180.0;
        this.radius = this._centerX;
        this._x = this._centerX + this.radius * Math.cos(this.angleInRadians);
        this._y = this._centerY + this.radius * Math.sin(this.angleInRadians);
        this._dValue = `M${this._centerX},${this._centerY} l${this._centerY},0 A${this._centerX},${this._centerY} 0 ${this.largeArcFlag} 0 ${this._x},${this._y} z`;
    }

    render() {
        let template = "";
        if (this.angleInDegrees == 360) {
            template = <circle cx={this._centerX} cy={this._centerY} r={this.radius} />
        } else {
            template = <path d={this._dValue}/>
        }
        return (
            <g>
                {template}
            </g>
        );
    }
}