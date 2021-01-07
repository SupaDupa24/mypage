import React,{ Component } from 'react';

export class Canvas extends Component {
    render() {
        return (
            <div
        id="wrapper"
        onMouseMove={this.handleMouseMove}
        onClick={this.handleMouseLeave}
      >
        <img id="image" alt='canvas' />
      </div>
        )
    }
}