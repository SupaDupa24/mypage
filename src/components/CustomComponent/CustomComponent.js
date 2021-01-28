import React from "react";
import { MDBWaves } from "mdbreact";

class CustomComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorPos: {}
    };
  }

  handleClick = e => {
    e.stopPropagation();
    // Waves - Get Cursor Position
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now() // time indicates particular clicks
    };
    this.setState({ cursorPos: cursorPos });
  };

  render() {

    return (
      <div
        onMouseUp={this.handleClick}
        onTouchStart={this.handleClick}
      >
        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(54).jpg" alt='' />
        <MDBWaves
          cursorPos={this.state.cursorPos}
        />
      </div>
    );
  }
}

export default CustomComponent;