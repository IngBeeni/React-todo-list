/* 1. Palette 컴포넌트를 만드세요 */
import React, { Component } from "react";

import "./Palette.css";

class Palette extends Component {
  // const Palette = ({ colors, selected, onSelect }) => {
  //   return <div>{colors}</div>;
  // };

  render() {
    const { color } = this.props;
    console.log("Palette.js");
    console.log("Palette.js palette : " + color);
    return (
      <div className="palette">
        {/* <div>{color}</div> */}
        <div className="color" style={{ background: color }} />
      </div>
    );
  }
}

// const Color = ({ color, active, onClick }) => {
//   return <div>Color</div>;
// };

export default Palette;
